import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-circles',
	templateUrl: './circles.component.html',
	styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements OnInit {

	@Input() my_class: string;

	constructor() {
		console.log( this.my_class );
	}

	ngOnInit() {
		console.log( this.my_class );		
	}

}