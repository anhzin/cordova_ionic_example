import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import * as GeoFire from "geofire";
import * as _ from 'lodash';

/*
  Generated class for the FakeData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FakeData {
  public dataRef: any;
  public geoFire: any;

  public workshops: any;
  constructor(public http: Http) {
    console.log('Hello FakeData Provider');
    this.dataRef = firebase.database().ref('/workshops');
    // var firebaseRef = firebase.database().ref().push();
    this.geoFire = new GeoFire(firebase.database().ref('/geofire'));

    //this.geoFire = firebase.database().ref('/geofire');


    this.workshops = [
      {
        "id": 0,
        "name": "zin workshops",
        "address": "18 Dong Da, Hai Chau, Da Nang",
        "latitude": 16.082518,
        "longitude": 108.221023,
        "description": "New workshops had a coupond",
        "status": 0,
        "operatingTime":
        {
          "monday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "tuesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "wesnesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "thursday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "friday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "saturday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "sunday":
          {
            "isOpen": false,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },

        },
        "services": [
          {
            "id": 0,
            "name": "Sửa chữa",
            "duration": -1

          },
          {
            "id": 1,
            "name": "Dịch vụ cứu hộ xe",
            "duration": -1

          },
          ,
          {
            "id": 2,
            "name": "Bảo Dưỡng Nhanh",
            "duration": -1

          },
          {
            "id": 3,
            "name": "Bảo Hành Phụ Tùng",
            "duration": -1

          },
          {
            "id": 4,
            "name": "Bảo dưỡng thay nhớt",
            "duration": -1

          },
          {
            "id": 5,
            "name": "Thay thế phụ tùng chính hãng",
            "duration": -1

          }

        ]
      },
      {
        "id": 1,
        "name": "Tien Thu",
        "address": "50 Ham Nghi, Hai Chau, Da Nang",
        "latitude": 16.066014,
        "longitude": 108.210382,
        "description": "New workshops had a coupond",
        "status": 0,
        "operatingTime":
        {
          "monday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "tuesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "wesnesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "thursday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "friday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "saturday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "sunday":
          {
            "isOpen": false,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },

        },
        "services": [
          {
            "id": 0,
            "name": "Sửa chữa",
            "duration": -1

          },
          {
            "id": 1,
            "name": "Dịch vụ cứu hộ xe",
            "duration": -1

          },
          ,
          {
            "id": 2,
            "name": "Bảo Dưỡng Nhanh",
            "duration": -1

          },
          {
            "id": 3,
            "name": "Bảo Hành Phụ Tùng",
            "duration": -1

          },
          {
            "id": 4,
            "name": "Bảo dưỡng thay nhớt",
            "duration": -1

          },
          {
            "id": 5,
            "name": "Thay thế phụ tùng chính hãng",
            "duration": -1

          }

        ]
      },
      {
        "id": 2,
        "name": "Tien Thu 2",
        "address": "100 Ngu Hanh Son, Hai Chau, Da Nang",
        "latitude": 16.049706,
        "longitude": 108.237622,
        "description": "New workshops had a coupond",
        "status": 0,
        "operatingTime":
        {
          "monday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "tuesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "wesnesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "thursday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "friday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "saturday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "sunday":
          {
            "isOpen": false,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },

        },
        "services": [
          {
            "id": 0,
            "name": "Sửa chữa",
            "duration": -1

          },
          {
            "id": 1,
            "name": "Dịch vụ cứu hộ xe",
            "duration": -1

          },
          ,
          {
            "id": 2,
            "name": "Bảo Dưỡng Nhanh",
            "duration": -1

          },
          {
            "id": 3,
            "name": "Bảo Hành Phụ Tùng",
            "duration": -1

          },
          {
            "id": 4,
            "name": "Bảo dưỡng thay nhớt",
            "duration": -1

          },
          {
            "id": 5,
            "name": "Thay thế phụ tùng chính hãng",
            "duration": -1

          }
        ]
      },
      {
        "id": 3,
        "name": "Hai Ha",
        "address": "Vinh Dien,Dien Ban, Quang Nam",
        "latitude": 15.889552,
        "longitude": 108.246649,
        "description": "New workshops had a coupond",
        "status": 0,
        "operatingTime":
        {
          "monday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "tuesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "wesnesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "thursday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "friday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "saturday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "sunday":
          {
            "isOpen": false,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },

        },
        "services": [
          {
            "id": 0,
            "name": "Sửa chữa",
            "duration": -1

          },
          {
            "id": 1,
            "name": "Dịch vụ cứu hộ xe",
            "duration": -1

          },
          ,
          {
            "id": 2,
            "name": "Bảo Dưỡng Nhanh",
            "duration": -1

          },
          {
            "id": 3,
            "name": "Bảo Hành Phụ Tùng",
            "duration": -1

          },
          {
            "id": 4,
            "name": "Bảo dưỡng thay nhớt",
            "duration": -1

          },
          {
            "id": 5,
            "name": "Thay thế phụ tùng chính hãng",
            "duration": -1

          }
        ]
      },
      {
        "id": 4,
        "name": "Hai Ha",
        "address": "Vinh Dien,Dien Ban, Quang Nam",
        "latitude": 16.088903,
        "longitude": 108.123724,
        "description": "New workshops had a coupond",
        "status": 0,
        "operatingTime":
        {
          "monday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "tuesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "wesnesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "thursday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "friday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "saturday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "sunday":
          {
            "isOpen": false,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },

        },
        "services": [
          {
            "id": 0,
            "name": "Sửa chữa",
            "duration": -1

          },
          {
            "id": 1,
            "name": "Dịch vụ cứu hộ xe",
            "duration": -1

          },
          ,
          {
            "id": 2,
            "name": "Bảo Dưỡng Nhanh",
            "duration": -1

          },
          {
            "id": 3,
            "name": "Bảo Hành Phụ Tùng",
            "duration": -1

          },
          {
            "id": 4,
            "name": "Bảo dưỡng thay nhớt",
            "duration": -1

          },
          {
            "id": 5,
            "name": "Thay thế phụ tùng chính hãng",
            "duration": -1

          }
        ]
      },
      {
        "id": 5,
        "name": "Thanh Tung",
        "address": "15 Pho Hue, Hai Ba Trung, Ha Noi",
        "latitude": 21.023882,
        "longitude": 105.854228,
        "description": "New workshops had a coupond",
        "status": 0,
        "operatingTime":
        {
          "monday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "tuesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "wesnesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "thursday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "friday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "saturday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "sunday":
          {
            "isOpen": false,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },

        },
        "services": [
          {
            "id": 0,
            "name": "Sửa chữa",
            "duration": -1

          },
          {
            "id": 1,
            "name": "Dịch vụ cứu hộ xe",
            "duration": -1

          },
          ,
          {
            "id": 2,
            "name": "Bảo Dưỡng Nhanh",
            "duration": -1

          },
          {
            "id": 3,
            "name": "Bảo Hành Phụ Tùng",
            "duration": -1

          },
          {
            "id": 4,
            "name": "Bảo dưỡng thay nhớt",
            "duration": -1

          },
          {
            "id": 5,
            "name": "Thay thế phụ tùng chính hãng",
            "duration": -1

          }
        ]
      },
      {
        "id": 6,
        "name": "Van Khai",
        "address": "50 Hang Cot, Ha Noi",
        "latitude": 21.037209,
        "longitude": 105.847103,
        "description": "New workshops had a coupond",
        "status": 0,
        "operatingTime":
        {
          "monday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "tuesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "wesnesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "thursday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "friday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "saturday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "sunday":
          {
            "isOpen": false,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },

        },
        "services": [
          {
            "id": 0,
            "name": "Sửa chữa",
            "duration": -1

          },
          {
            "id": 1,
            "name": "Dịch vụ cứu hộ xe",
            "duration": -1

          },
          ,
          {
            "id": 2,
            "name": "Bảo Dưỡng Nhanh",
            "duration": -1

          },
          {
            "id": 3,
            "name": "Bảo Hành Phụ Tùng",
            "duration": -1

          },
          {
            "id": 4,
            "name": "Bảo dưỡng thay nhớt",
            "duration": -1

          },
          {
            "id": 5,
            "name": "Thay thế phụ tùng chính hãng",
            "duration": -1

          }
        ]
      }
      ,
      {
        "id": 7,
        "name": "Cong Tien",
        "address": "22 Ong Ich Khiem, Ha Noi",
        "latitude": 21.033661,
        "longitude": 105.833587,
        "description": "New workshops had a coupond",
        "status": 0,
        "operatingTime":
        {
          "monday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "tuesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "wesnesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "thursday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "friday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "saturday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "sunday":
          {
            "isOpen": false,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },

        },
        "services": [
          {
            "id": 0,
            "name": "Sửa chữa",
            "duration": -1

          },
          {
            "id": 1,
            "name": "Dịch vụ cứu hộ xe",
            "duration": -1

          },
          ,
          {
            "id": 2,
            "name": "Bảo Dưỡng Nhanh",
            "duration": -1

          },
          {
            "id": 3,
            "name": "Bảo Hành Phụ Tùng",
            "duration": -1

          },
          {
            "id": 4,
            "name": "Bảo dưỡng thay nhớt",
            "duration": -1

          },
          {
            "id": 5,
            "name": "Thay thế phụ tùng chính hãng",
            "duration": -1

          }
        ]
      }
      ,
      {
        "id": 8,
        "name": "Hoang Lan",
        "address": "92 Ton Duc Thang, Ha Noi",
        "latitude": 21.027263,
        "longitude": 105.833980,
        "description": "New workshops had a coupond",
        "status": 0,
        "operatingTime":
        {
          "monday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "tuesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "wesnesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "thursday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "friday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "saturday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "sunday":
          {
            "isOpen": false,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },

        },
        "services": [
          {
            "id": 0,
            "name": "Sửa chữa",
            "duration": -1

          },
          {
            "id": 1,
            "name": "Dịch vụ cứu hộ xe",
            "duration": -1

          },
          ,
          {
            "id": 2,
            "name": "Bảo Dưỡng Nhanh",
            "duration": -1

          },
          {
            "id": 3,
            "name": "Bảo Hành Phụ Tùng",
            "duration": -1

          },
          {
            "id": 4,
            "name": "Bảo dưỡng thay nhớt",
            "duration": -1

          },
          {
            "id": 5,
            "name": "Thay thế phụ tùng chính hãng",
            "duration": -1

          }
        ]
      }
      ,
      {
        "id": 9,
        "name": "Van Xuan",
        "address": "Phuc Xa, Ha Noi",
        "latitude": 21.046798,
        "longitude": 105.848112,
        "description": "New workshops had a coupond",
        "status": 0,
        "operatingTime":
        {
          "monday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "tuesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "wesnesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "thursday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "friday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "saturday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "sunday":
          {
            "isOpen": false,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },

        },
        "services": [
          {
            "id": 0,
            "name": "Sửa chữa",
            "duration": -1

          },
          {
            "id": 1,
            "name": "Dịch vụ cứu hộ xe",
            "duration": -1

          },
          ,
          {
            "id": 2,
            "name": "Bảo Dưỡng Nhanh",
            "duration": -1

          },
          {
            "id": 3,
            "name": "Bảo Hành Phụ Tùng",
            "duration": -1

          },
          {
            "id": 4,
            "name": "Bảo dưỡng thay nhớt",
            "duration": -1

          },
          {
            "id": 5,
            "name": "Thay thế phụ tùng chính hãng",
            "duration": -1

          }
        ]
      }
      ,
      {
        "id": 10,
        "name": "Thanh Tung 2",
        "address": "124 Au Co, Ha Noi",
        "latitude": 21.063010,
        "longitude": 105.832185,
        "description": "New workshops had a coupond",
        "status": 0,
        "operatingTime":
        {
          "monday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "tuesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "wesnesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "thursday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "friday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "saturday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "sunday":
          {
            "isOpen": false,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },

        },
        "services": [
          {
            "id": 0,
            "name": "Sửa chữa",
            "duration": -1

          },
          {
            "id": 1,
            "name": "Dịch vụ cứu hộ xe",
            "duration": -1

          },
          ,
          {
            "id": 2,
            "name": "Bảo Dưỡng Nhanh",
            "duration": -1

          },
          {
            "id": 3,
            "name": "Bảo Hành Phụ Tùng",
            "duration": -1

          },
          {
            "id": 4,
            "name": "Bảo dưỡng thay nhớt",
            "duration": -1

          },
          {
            "id": 5,
            "name": "Thay thế phụ tùng chính hãng",
            "duration": -1

          }
        ]
      }
      ,
      {
        "id": 11,
        "name": "Le Thanh",
        "address": "Tan Trai, Soc Son, Ha Noi",
        "latitude": 21.210142,
        "longitude": 105.795556,
        "description": "New workshops had a coupond",
        "status": 0,
        "operatingTime":
        {
          "monday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "tuesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "wesnesday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "thursday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "friday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "saturday":
          {
            "isOpen": true,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },
          "sunday":
          {
            "isOpen": false,
            "timeOpen": "08:00",
            "timeClose": "18:00"
          },

        },
        "services": [
          {
            "id": 0,
            "name": "Sửa chữa",
            "duration": -1

          },
          {
            "id": 1,
            "name": "Dịch vụ cứu hộ xe",
            "duration": -1

          },
          ,
          {
            "id": 2,
            "name": "Bảo Dưỡng Nhanh",
            "duration": -1

          },
          {
            "id": 3,
            "name": "Bảo Hành Phụ Tùng",
            "duration": -1

          },
          {
            "id": 4,
            "name": "Bảo dưỡng thay nhớt",
            "duration": -1

          },
          {
            "id": 5,
            "name": "Thay thế phụ tùng chính hãng",
            "duration": -1

          }
        ]
      }


    ];
  }
  generateDataForWorkShop() {

    this.dataRef.set(this.workshops);
  }

  getWorkshopDetail(id) {
    this.dataRef.child(id).on("child_added", function (snapshot) {
      // This will be called exactly two times (unless there are less than two
      // dinosaurs in the Database).

      // It will also get fired again if one of the first two dinosaurs is
      // removed from the data set, as a new dinosaur will now be the second
      // shortest.
      // console.log("getWorkshopDetail " + snapshot.key);
    });
  }

  getAllWorkshop() {
    let arrayWorkshop: any;
    this.dataRef.on("value", function (snapshot) {
      // arrayWorkshop.push(snapshot);
      // console.log("getAllWorkshop " + snapshot);
      arrayWorkshop = snapshot.val();
      //console.log("arrayWorkshops value " + snapshot.val());
      _.forEach(arrayWorkshop, function (value) {
        let latitude: any;
        latitude = value["latitude"];
        let longitude: any;
        longitude = value["longitude"];

      });
    });
  }

  initGeoFireForDatabase() {
    let self = this;
    _.forEach(self.workshops, function (value) {
      console.log(value);

      let location = [value["latitude"], value["longitude"]];
      if (location != null && value["id"] != null && value["id"] != undefined) {
        return self.geoFire.set(value["id"].toString(), location).then(function () {
          console.log(value["latitude"]);
          console.log(value["longitude"]);
        })
      }
      ;
    });

  }
}
