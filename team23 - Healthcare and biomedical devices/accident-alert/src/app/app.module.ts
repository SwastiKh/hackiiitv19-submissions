import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MapComponent } from './elements/map/map.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HospitalListComponent } from './components/hospital-list/hospital-list.component';
import { AgmCoreModule } from '@agm/core';
import { AboutComponent } from './components/about/about.component';
import {enableProdMode} from "@angular/core";

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MapComponent,
    HospitalListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkFLSR9Xc8KRA7-tA2C9ip91hTeF43ais',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
