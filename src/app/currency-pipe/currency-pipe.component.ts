import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  templateUrl: './currency-pipe.component.html',
  styleUrls: ['./currency-pipe.component.css']
})
export class CurrencyPipeComponent implements OnInit {

    a: number = 1.252354;
    b: number = 3.145276;

    constructor() { }

    ngOnInit() {
    }

}
