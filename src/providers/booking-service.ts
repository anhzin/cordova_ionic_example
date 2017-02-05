import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

/*
  Generated class for the BookingService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BookingService {
  public dataRef: any;
  constructor(public http: Http) {
    console.log('Hello BookingService Provider');
    this.dataRef = firebase.database().ref('/bookings');
  }

  saveBooking(bookings) {
    this.dataRef.child(this.dataRef.push().key).set(bookings);
    
  }
}
