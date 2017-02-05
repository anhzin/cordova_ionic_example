import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, ModalController, NavParams, Events, PopoverController, LoadingController } from 'ionic-angular';
import { SearchListPage } from '../search-list/search-list';
import { AuthData } from '../../providers/auth-data';
import { FakeData } from '../../providers/fake-data';
import { LoginPage } from '../login/login';
import { WorkshopDetailPage } from '../workshops/workshop-detail/workshop-detail';

import * as GeoFire from "geofire";
import * as _ from 'lodash';

import {
    Camera,
    ImagePicker,
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapsLatLng,
    CameraPosition,
    GoogleMapsMarkerOptions,
    GoogleMapsMarker,
    Geolocation
} from 'ionic-native';

declare var google;
declare var plugin;
@Component({
    selector: 'home-page',
    templateUrl: 'home.html'
})
export class HomePage {
    searchBox: any;
    styleIndex;
    styles: any;
    beforePos: any;
    lastPos: any;
    startInputModel: any;
    endInputModel: any;
    public base64Image: string;
    arrayWorkshops: any;
    modalOptions;
    showResultSearch: boolean;
    workshopsNearby: any;
    nearbys: any;
    @ViewChild('map') mapElement: ElementRef;
    map: any;
    public workshopRef: any;
    public geoRef: any;
    constructor(public navCtrl: NavController, params: NavParams, public http: Http, public events: Events,
        public authData: AuthData, public fakeData: FakeData, private modalCtrl: ModalController, public loadingCtrl: LoadingController) {
        this.styleIndex = 0;
        this.styles = [
            "http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_gray.png",
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        ];
        var that = this;
        this.events.subscribe('menu:opened', () => {
            if (that.map != null && that.map != undefined) {
                that.map.setClickable(false);
            }

        });
        this.events.subscribe('menu:closed', () => {
            if (that.map != null && that.map != undefined) {
                that.map.setClickable(true);
            }
        });

        this.workshopRef = firebase.database().ref('/workshops');
        this.geoRef = firebase.database().ref('/geofire');
        //  this.findNearBy();
    }

    ionViewDidLoad() {
        //this.fakeData.initGeoFireForDatabase();
        //    this.fakeData.getAllWorkshop();
        this.loadMap();

        this.showResultSearch = false;
    }

    get startInput() {
        return this.startInputModel;
    }

    get endInput() {
        return this.endInputModel;
    }

    currentLocation() {
        var that = this;
        this.map.getMyLocation(function (location) {
            var msg = ["Current your location:\n",
                "latitude:" + location.latLng.lat,
                "longitude:" + location.latLng.lng,
                "speed:" + location.speed,
                "time:" + location.time,
                "bearing:" + location.bearing].join("\n");
            let position: CameraPosition = {
                target: location.latLng,
                zoom: 18,
                tilt: 30
            };
            that.map.moveCamera(position);
            that.map.addMarker({
                'position': location.latLng,
                'title': msg
            }, function (marker) {
                marker.showInfoWindow();
            });
        });
    }

    takePicture() {
        var that = this;
        Camera.getPicture({
            destinationType: Camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then((imageData) => {
            // imageData is a base64 encoded string
            that.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            console.log(err);
        });
    }

    choosePicture() {
        var that = this;
        let options = {
            maximumImagesCount: 1,
        }
        ImagePicker.getPictures(options).then((results) => {
            that.base64Image = results[0];
        }, (err) => { });
    }

    changeStyleOfMarker() {
        if (this.styleIndex < this.styles.length - 1) {
            this.styleIndex++;
        }
        else
            this.styleIndex = 0;
    }

    openStart() {
        var that = this;
        this.navCtrl.push(SearchListPage, {
            callback: function (_params) {
                if (typeof _params == "undefined")
                    return;
                let latLng: GoogleMapsLatLng = new GoogleMapsLatLng(_params.latitude, _params.longtitude);
                let position: CameraPosition = {
                    target: latLng,
                    zoom: 18,
                    tilt: 30
                };
                that.startInputModel = _params.description;
                that.beforePos = latLng;
                let markerOptions: GoogleMapsMarkerOptions = {
                    position: latLng,
                    title: _params.description,
                    icon: {
                        'url': that.styles[that.styleIndex]
                    }
                };
                that.map.addMarker(markerOptions)
                    .then((marker: GoogleMapsMarker) => {
                        marker.showInfoWindow();
                    });
                that.map.moveCamera(position);
                return new Promise((resolve, reject) => {
                    resolve();
                });
            }
        });
    }

    openEnd() {
        var that = this;
        this.navCtrl.push(SearchListPage, {
            callback: function (_params) {
                if (typeof _params == "undefined")
                    return;
                let latLng: GoogleMapsLatLng = new GoogleMapsLatLng(_params.latitude, _params.longtitude);
                let position: CameraPosition = {
                    target: latLng,
                    zoom: 18,
                    tilt: 30
                };
                that.lastPos = latLng;
                that.endInputModel = _params.description;
                let markerOptions: GoogleMapsMarkerOptions = {
                    position: latLng,
                    title: _params.description,
                    icon: {
                        'url': that.styles[that.styleIndex]
                    }
                };
                that.map.addMarker(markerOptions)
                    .then((marker: GoogleMapsMarker) => {
                        marker.showInfoWindow();
                    });
                that.map.moveCamera(position);
                return new Promise((resolve, reject) => {
                    resolve();
                });
            }
        });
    }

    calculate() {
        this.calculateBetweenPoint(this.beforePos, this.lastPos);
    }

    drawPolygon(encodedPolygon): any {
        var precision = 5; //option
        this.map.addPolyline({
            points: plugin.google.maps.geometry.encoding.decodePath(encodedPolygon, precision),
            'color': '#AA00FF',
            'width': 10,
            'geodesic': true
        });
    }


    calculateBetweenPoint(pos1, pos2) {
        var service = new google.maps.DistanceMatrixService();
        var that = this;
        this.http.get("https://maps.googleapis.com/maps/api/directions/json?origin=" + pos1.lat + "," + pos1.lng + "&destination=" + pos2.lat + "," + pos2.lng + "&mode=driving&key=AIzaSyBcvJyg8uQtgxPH9lPV-criyVkb_49akXo")
            .subscribe(data => {
                var result = data.json().routes[0].legs[0].steps;
                for (var i = 0; i < result.length; i++) {
                    that.drawPolygon(result[i].polyline.points);
                }
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
        service.getDistanceMatrix({
            origins: [pos1],
            destinations: [pos2],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        }, function (response, status) {
            if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
                var distance = response.rows[0].elements[0].distance.text;
                var duration = response.rows[0].elements[0].duration.text;
                var dvDistance = document.getElementById("distance");
                dvDistance.innerHTML = "Distance: " + distance;
                var dvDuration = document.getElementById("duration");
                dvDuration.innerHTML = "Duration: " + duration;

            } else {
            }
        });
    }

    initMap(latLng) {
        let position: CameraPosition = {
            target: latLng,
            zoom: 14
        };
        this.map.moveCamera(position);
        var evtName = GoogleMapsEvent.MAP_LONG_CLICK;
        var that = this;
        let markerOptions: GoogleMapsMarkerOptions = {
            position: latLng
        };
        that.map.addMarker(markerOptions)
            .then((marker: GoogleMapsMarker) => {
                marker.showInfoWindow();
            });
    }

    loadMap() {
        var that = this;
        document.addEventListener("deviceready", function () {

            Geolocation.getCurrentPosition().then((position) => {

                let latLng: GoogleMapsLatLng = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude);
                console.log("getCurrentPosition11 " + latLng);
                let mapOptions = {
                    center: latLng,
                    zoom: 14,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }

                let element: HTMLElement = document.getElementById('map');
                that.map = new GoogleMap(element, mapOptions);
                that.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
                    that.initMap(latLng);

                    that.getAllWorkshop();
                });

            }, (err) => {
                console.log('Error getting location', err);
            });

        });

    }

    logOut() {
        this.authData.logoutUser().then(() => {
            this.navCtrl.setRoot(LoginPage);
        });
    }

    getAllWorkshop() {
        let self = this;
        let arrayWorkshop: any;
        this.workshopRef.on("value", function (snapshot) {
            console.log("getAllWorkshop " + snapshot);
            self.arrayWorkshops = snapshot.val();
            self.addMarkerWorkshop(snapshot.val());
            return snapshot;
        });
    }

    addMarkerWorkshop(workshops) {
        var evtName = GoogleMapsEvent.MAP_LONG_CLICK;
        var that = this;
        //console.log("arrayWorkshops " + workshops);
        if (workshops != undefined && workshops != null) {
            _.forEach(workshops, function (value) {
                let latitude: any;
                latitude = value["latitude"];
                let longitude: any;
                longitude = value["longitude"];
                let name = value["name"];
                if (latitude != null && latitude != undefined && longitude != null && longitude != undefined) {
                    let latLng: GoogleMapsLatLng = new GoogleMapsLatLng(latitude, longitude);
                    let markerOptions: GoogleMapsMarkerOptions = {
                        position: latLng,
                        title: name,
                        snippet: "Address: " + value["address"],
                        icon: {
                            'url': that.styles[that.styleIndex]
                        },

                    };
                    var infowindow = new google.maps.InfoWindow({
                        content: '<h4>You are here</h4><button onclick="myFunction()">Click me!</button>'
                    });

                    that.map.addMarker(markerOptions).then(
                        (marker: GoogleMapsMarker) => {

                            marker.addEventListener(GoogleMapsEvent.INFO_CLICK).subscribe(
                                (data) => {
                                    console.log("addMarker");

                                    console.log("You clicked " + marker.getTitle());
                                    console.log(" id workshop " + value["id"]);
                                    that.presentPopover(value["id"]);
                                    //infowindow.open(that.map, marker);
                                }
                            );
                        }
                    );


                }
                // console.log("arrayWorkshops " + value);
            });
        }
    }
    presentPopover(id) {
        this.navCtrl.push(WorkshopDetailPage, { idWorkshop: id });
    }
    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 5000
        });
        loader.present();
    }
    findNearBy() {
        let self = this;
        self.nearbys = [];
        this.presentLoading();
        Geolocation.getCurrentPosition().then((position) => {
            var geoFire = new GeoFire(this.geoRef);
            var location = [position.coords.latitude, position.coords.longitude];
            // var distance = 200 * 1.609344; // mile to km
            var distance = 300 / 1.609344; // km to mile
            var geoQuery = geoFire.query({
                center: location,
                radius: distance
            });
            let arrayWorkshop = [];
            // geoQuery.on("key_entered", function (id, location) {
            //     console.log("Found a garage: " + id);
            // });
            var onReadyRegistration = geoQuery.on("ready", function () {
                self.showResultSearch = true;
                console.log("GeoQuery has loaded and fired all other events for initial data");
                // _.sortBy(arrayWorkshop, 'location').take(3);
                let arrayWorkshopSort = _.sortBy(arrayWorkshop, [function (o) { return o.location; }]);
                console.log(arrayWorkshopSort);
                for (let i = 0; i < arrayWorkshopSort.length; i++) {
                    self.workshopRef.child(arrayWorkshopSort[i].id).on("value", function (snapshot) {
                        if (snapshot != null) {
                            let workshop = snapshot.val();
                            workshop.location = Math.round(arrayWorkshopSort[i].location);
                            self.nearbys.push(workshop);
                        }
                        console.log("findNearBy idWorkshop snapshot.val()  " + snapshot.val());

                    });

                }

            });

            var onKeyEnteredRegistration = geoQuery.on("key_entered", function (id, key, location, distance) {
                console.log("id: " + id + " key: " + key + " entered query at " + location + " (" + distance + " km from center)");
                let workshopLocation = {
                    id: id,
                    key: key,
                    location: location
                }
                arrayWorkshop.push(workshopLocation);
                self.showResultSearch = true;

            });

            var onKeyExitedRegistration = geoQuery.on("key_exited", function (key, location, distance) {
                console.log(key + " exited query to " + location + " (" + distance + " km from center)");
            });

            var onKeyMovedRegistration = geoQuery.on("key_moved", function (key, location, distance) {
                console.log(key + " moved within query to " + location + " (" + distance + " km from center)");
            });
        });
    }
}
