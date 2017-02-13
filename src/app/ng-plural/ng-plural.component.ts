import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-plural',
  templateUrl: './ng-plural.component.html',
  styleUrls: ['./ng-plural.component.css']
})
export class NgPluralComponent implements OnInit {

    runs: Array<number> = [ 1, 2, 1, 4, 4, 0 ];
    count: number = 2;
    constructor() { }

    ngOnInit() {
    }

}
