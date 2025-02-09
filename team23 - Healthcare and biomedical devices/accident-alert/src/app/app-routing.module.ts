import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MapComponent } from 'src/app/elements/map/map.component';
import { HospitalListComponent } from './components/hospital-list/hospital-list.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'mapComp', component: MapComponent },
    { path: 'list', component: HospitalListComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
