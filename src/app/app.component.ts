import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HistoryBookingPage } from '../pages/history-booking/history-booking';


import { AuthData } from '../providers/auth-data';
import { FakeData } from '../providers/fake-data';

import firebase from 'firebase';


declare var google;
var directionsService;
var directionsDisplay;
var service;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  zone: NgZone;
  @ViewChild(Nav) nav: Nav;
  public rootPage: any;

  pages: any;

  constructor(platform: Platform, public events: Events) {

    firebase.initializeApp({
      apiKey: "AIzaSyAlM0WvAwHAqryg196q98QvGrpfRIKQ9WY",
      authDomain: "booking-repair-car.firebaseapp.com",
      databaseURL: "https://booking-repair-car.firebaseio.com",
      storageBucket: "booking-repair-car.appspot.com",
      messagingSenderId: "915775141729"
    });

    this.pages = [
      // "Profile",
      "Home",
      "History",
      "Logout"
    ];
    this.zone = new NgZone({});
    firebase.auth().onAuthStateChanged((user) => {
      this.zone.run(() => {
        if (!user) {
          console.log('onAuthStateChanged LoginPage');
          this.rootPage = LoginPage;
        } else {
          console.log('onAuthStateChanged LoginPage');
          this.rootPage = HomePage;
        }
      });
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  menuOpened() {
    this.events.publish('menu:opened');
  }

  menuClosed() {
    this.events.publish('menu:closed');
  }

  callHistory(item) {
    console.log("============ callHistory" + item);
    if (item === "History") {
      this.rootPage = HistoryBookingPage;
    }else if(item ==="Home"){
      this.rootPage = HomePage;
    }
  }
}
