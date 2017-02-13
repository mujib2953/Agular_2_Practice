import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decimal-pipe',
  templateUrl: './decimal-pipe.component.html',
  styleUrls: ['./decimal-pipe.component.css']
})
export class DecimalPipeComponent implements OnInit {

    pi: number = Math.PI;
    constructor() { }

    ngOnInit() {
    }

}
