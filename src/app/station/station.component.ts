import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  // styleUrls: ['./stations.component.css']
  styles: [
  ]
})
export class StationComponent implements OnInit {
  @Input()
  public station: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.station = String(routeParams.get('station'));
  }

}
