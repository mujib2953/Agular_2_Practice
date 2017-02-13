import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

    runs: Array<number> = [ 2, 1, 1, 6, 0, 1 ];

    constructor() { }

    ngOnInit() {
    }

}
