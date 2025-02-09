import { Component, OnInit, ViewChild } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
  })
  export class MapComponent  implements OnInit {
    title: string = 'Accident Map';
    latitude: number;
    longitude: number;
    zoom:number;
   
    ngOnInit() {
      this.setCurrentLocation();
    }
   
      // Get Current Location Coordinates
      private setCurrentLocation() {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.zoom = 15;
          });
        }
      }
   
  }

// /// <reference types="@types/googlemaps"/>
// import {} from 'googlemaps';

// @Component({
//     selector: 'app-map',
//     templateUrl: './map.component.html',
//     styleUrls: ['./map.component.css']
// })
// export class MapComponent implements OnInit {
//     @ViewChild('map', {static: false}) mapElement: any;
//     map: google.maps.Map;
//     constructor() { }

//     ngOnInit() {
//         const mapProperties = {
//             center: new google.maps.LatLng(22.000, 22.000),
//             zoom: 10,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
//     }
//     public getLocation() {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(this.showPosition, this.error);
//         }
//         else {
//             document.body.innerHTML = "Geolocation is not supported by this browser.";
//         }
//     }
//     public showPosition(position) {
//         document.body.innerHTML = "Latitude: " + position.coords.latitude +
//             "<br>Longitude: " + position.coords.longitude;
//     }
//     public error(err) {
//         switch (err.code) {
//             case err.PERMISSION_DENIED:
//                 document.body.innerHTML = "Please allow us to access your location! It's really important."
//                 break;
//             case err.POSITION_UNAVAILABLE:
//                 document.body.innerHTML = "Your position is unavailable."
//                 break;
//             case err.TIMEOUT:
//                 document.body.innerHTML = "REQUEST_TIMED_OUT<br>CHECK YOUR INTERNET AND TRY AGAIN"
//                 break;
//             case err.UNKNOWN_ERROR:
//                 document.body.innerHTML = "There is something wrong with your location."
//                 break;
//         }
//     }
// }