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
      apiKey: 'AIzaSyDU3oKqFRbQ6xqohg83BOD0DfUPkm',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
