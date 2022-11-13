import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'link-light-rail-seattle';
  count = 0;
  expectedCount: number;
  message = 'days since the last Seattle link light rail accident';
  stations = [
    'Northgate',
    'Roosevelt',
    'U District',
    'University of Washington',
    'Capitol Hill',
    'Westlake',
    'University Street',
    'Pioneer Square',
    'International District/Chinatown',
    'Stadium',
    'SODO',
    'Beacon Hill',
    'Mount Baker',
    'Columbia City',
    'Othello',
    'Rainier Beach',
    'Tukwila International Blvd',
    'SeaTac/Airport',
    'Angle Lake',
  ];

  constructor() {
    const lastAccidentDate = new Date(2022, 7, 14);
    const difference = Math.floor((Date.now() - lastAccidentDate.getTime()) / 86400000);
    console.log(difference);
    this.expectedCount = difference;
  }

  ngOnInit() {
    setTimeout(() => {
      let intervalId = setInterval(() => {
          if (this.count < this.expectedCount) {
              this.count++;
          } else {
              clearInterval(intervalId);
          }
      }, 50);
    }, 1000);
  }
}
