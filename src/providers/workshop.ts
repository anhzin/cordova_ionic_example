import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import * as GeoFire from "geofire";
import * as _ from 'lodash';

/*
  Generated class for the Workshop provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class Workshop {
  public dataRef: any;
  workshop: any;
  constructor(public http: Http) {
    console.log('Hello Workshop Provider');
    this.dataRef = firebase.database().ref('/workshops');
  }
  getWorkshopDetail(id) {
    this.dataRef.child(id).on("child_added", function (snapshot) {
      return snapshot.val();
    });
  }

}
