import { Component, Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Workshop } from '../../../providers/workshop';
import { NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { BookingPage } from '../../booking/booking';

import 'rxjs/add/operator/map';
import firebase from 'firebase';
import * as GeoFire from "geofire";
import * as _ from 'lodash';


/*
  Generated class for the WorkshopDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workshop-detail',
  templateUrl: 'workshop-detail.html'
})
export class WorkshopDetailPage {
  operatingTime: any;
  workshopRef: any;
  workshop: any;
  idWorkshop: any;
  services: any;
  zone: NgZone;
  constructor(private navCtrl: NavController, private navParams: NavParams, private workshopService: Workshop) {
    console.log('Hello WorkshopDetailPage');
    this.workshopRef = firebase.database().ref('/workshops');

    this.idWorkshop = navParams.get('idWorkshop');
    console.log("idWorkshop " + this.idWorkshop);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkshopDetailPage');
    this.getWorkshopDetail();
  }
  getWorkshopDetail() {
    if (this.idWorkshop != null && this.idWorkshop != undefined) {
      let self = this;
      this.workshopRef.child(this.idWorkshop).on("value", function (snapshot) {
        if (snapshot != null) {
          self.workshop = snapshot.val();
          // var newObject = Object.keys(snapshot.val()).map(function (key) {
          //   return snapshot.val()[key];
          // });
          // self.workshop =newObject;
          console.log("self.workshop " + self.workshop);
          self.operatingTime = self.workshop.operatingTime;
          self.services = self.workshop.services;
        }
        console.log("snapshot.val() " + snapshot.val());
      })
    }
  }

  callBooking() {
    this.navCtrl.push(BookingPage, { idWorkshop: this.idWorkshop});
  }
}
