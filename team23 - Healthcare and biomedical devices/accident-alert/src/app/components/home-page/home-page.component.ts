import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MapComponent } from '../../elements/map/map.component';

@Component({
    selector: 'app-home',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    @ViewChild('map') mapElement: any;
    map: google.maps.Map;
    constructor() { }

    ngOnInit() {
        const mapProperties = {
            center: new google.maps.LatLng(35.2271, -80.8431),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    }

}
