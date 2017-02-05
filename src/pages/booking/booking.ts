import { Component, Injectable } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Workshop } from '../../providers/workshop';
import { NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';

import 'rxjs/add/operator/map';
import firebase from 'firebase';
import * as GeoFire from "geofire";
import * as _ from 'lodash';
import * as moment from 'moment';

/*
  Generated class for the Booking page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})
export class BookingPage {
  workshopRef: any;
  userRef: any;
  bookingRef: any;
  workshop: any;
  idWorkshop: any;
  services: any;
  zone: NgZone;
  timeBooking: any;
  userProfile: any;
  user: any;
  service: any;
  serviceName: any;
  index: any;
  nameService:any;
  constructor(private navCtrl: NavController, private navParams: NavParams, private workshopService: Workshop, public alertCtrl: AlertController) {
    this.workshopRef = firebase.database().ref('/workshops');
    this.userRef = firebase.database().ref('/userProfile');
    this.bookingRef = firebase.database().ref('/bookings');
    this.idWorkshop = navParams.get('idWorkshop');
    this.index = 0;
    console.log("idWorkshop " + this.idWorkshop);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
    let myDate: String = new Date().toISOString();
    console.log("myDate " + myDate);
    this.timeBooking = myDate;
    this.getInformation();
  }
  getInformation() {
    let self = this;
    this.workshopRef.child(this.idWorkshop).on("value", function (snapshot) {
      if (snapshot != null) {
        self.workshop = snapshot.val();
        self.services = self.workshop.services;
        if (self.services != null) {
          self.service = self.services[0];
          self.nameService = self.service.name;
        }
      }
      console.log("idWorkshop snapshot.val()  " + snapshot.val());

    });
    this.zone = new NgZone({});
    firebase.auth().onAuthStateChanged((user) => {
      this.zone.run(() => {
        if (user) {
          self.user = user;
          console.log(" user.uid " + user.uid);
          this.userRef.child(user.uid).on("value", function (snapshot) {
            if (snapshot != null) {
              self.userProfile = snapshot.val();
              console.log(" self.userProfile " + self.userProfile);
            }
            console.log("getInformation snapshot.val() " + snapshot.val());

          });
        }
      }
      );
    });
  }
  callBooking() {
    let self = this;
    if (self.workshop != null && self.workshop != undefined && self.userProfile != null && self.userProfile != undefined && self.service != null && self.timeBooking != null) {

      var bookings = self.userProfile.bookings;
      if (bookings == null) {
        bookings = [];
      }
      let booking = {
        workshopId: self.workshop.id,
        workshopName: self.workshop.name,
        serviceId: self.service.id,
        serviceName: self.service.name,
        timeBooking: self.timeBooking,
        userId: self.user.uid,
        created: moment().unix()
      }

      bookings.push(booking);
      self.userProfile.bookings = bookings;
      self.userRef.child(self.user.uid).set(self.userProfile);
      self.bookingRef.push(booking);
      var userBookings = self.workshop.userBookings;
      if (userBookings == null) {
        userBookings = [];
      }
      userBookings.push(booking);
      self.workshop.userBookings = userBookings;
      self.workshopRef.child(self.workshop.id).set(self.workshop);
      self.navCtrl.pop(HomePage);
    
  } else if (self.service == null) {

      let errorMessage: any;
      errorMessage = "Please choose a service!";
      let alert = this.alertCtrl.create({
        message: errorMessage.toString(),
        // message: "This account not exist!",
        buttons: [
          {
            text: "Ok",
            role: 'cancel'
          }
        ]
      });
      alert.present();
    } else if (self.timeBooking == null) {

      let errorMessage: any;


      errorMessage = "Please select a day!";
      let alert = this.alertCtrl.create({
        message: errorMessage.toString(),
        // message: "This account not exist!",
        buttons: [
          {
            text: "Ok",
            role: 'cancel'
          }
        ]
      });
      alert.present();
    }
  }

  updateSelectedValue(event) {
    console.log("========= UPDATE serviceName " + this.serviceName);
    console.log("========= UPDATE event " + event);
    if (this.services != null) {
      this.service = _.find(this.services, function (o) { return o.id == event; });
      console.log("========= UPDATE service " + this.service);
    }
  }
}
