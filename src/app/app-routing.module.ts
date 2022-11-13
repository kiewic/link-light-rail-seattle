import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccidentsComponent } from './accidents/accidents.component';
import { StationsComponent } from './stations/stations.component';

const routes: Routes = [
  { path: 'accidents', component: AccidentsComponent },
  { path: '', component: StationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
