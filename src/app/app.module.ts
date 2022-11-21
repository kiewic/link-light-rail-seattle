import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationsComponent } from './stations/stations.component';
import { AccidentsComponent } from './accidents/accidents.component';
import { StationComponent } from './station/station.component';

@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    AccidentsComponent,
    StationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
