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
  Generated class for the HistoryBooking page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-history-booking',
  templateUrl: 'history-booking.html'
})
export class HistoryBookingPage {
  bookings: any;
  historyRef: any;
  userRef: any;
  zone: NgZone;
  user: any;
  userProfile: any;
  constructor(private navCtrl: NavController, private navParams: NavParams, private workshopService: Workshop, public alertCtrl: AlertController) {
    // this.historyRef = firebase.database().ref('/bookings');
    this.userRef = firebase.database().ref('/userProfile');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryBookingPage');
    this.getInformation();
  }

  getInformation() {
    let self = this;

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
              if (self.userProfile != null) {
                self.bookings = self.userProfile.bookings;
              }
            }
            console.log("getInformation snapshot.val() " + snapshot.val());

          });
        }
      }
      );
    });
  }
}
