import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../../elements/map/map.component';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    constructor(public auth: AuthService) { }

    ngOnInit() {
    }

}
