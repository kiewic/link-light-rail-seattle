import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
