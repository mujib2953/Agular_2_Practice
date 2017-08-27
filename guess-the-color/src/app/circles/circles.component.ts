import { Component, OnInit, Input } from '@angular/core';

import { MyCustomService } from '../my-custom.service';

@Component({
	selector: 'app-circles',
	templateUrl: './circles.component.html',
	styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements OnInit {

	@Input() my_class: string;

	constructor(
		public myService: MyCustomService
	) {

	}

	ngOnInit() {}

	circleClicked() {
		this.myService.updateColor( this.my_class );
	};
}
