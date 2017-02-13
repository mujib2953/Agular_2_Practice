import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [
      Location,
      { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class LocationComponent implements OnInit {

    locationObj: Location;

    constructor(
        public location: Location

    ) {
        this.locationObj = location;
    }

    ngOnInit() {
    }

}
