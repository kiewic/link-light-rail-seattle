import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccidentsComponent } from './accidents/accidents.component';
import { StationComponent } from './station/station.component';
import { StationsComponent } from './stations/stations.component';

const routes: Routes = [
  { path: 'accidents', component: AccidentsComponent },
  { path: 'station/:station', component: StationComponent },
  { path: '', component: StationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
