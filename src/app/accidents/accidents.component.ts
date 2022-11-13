import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accidents',
  templateUrl: './accidents.component.html',
  styleUrls: ['./accidents.component.css']
})
export class AccidentsComponent implements OnInit {
  count = 0;
  expectedCount: number;

  constructor() {
    const lastAccidentDate = new Date(2022, 7, 14);
    const difference = Math.floor((Date.now() - lastAccidentDate.getTime()) / 86400000);
    console.log(difference);
    this.expectedCount = difference;
  }

  ngOnInit(): void {
    setTimeout(() => {
      let intervalId = setInterval(() => {
          if (this.count < this.expectedCount) {
              this.count++;
          } else {
              clearInterval(intervalId);
          }
      }, 50);
    }, 500);
  }
}
