import { Component } from '@angular/core';

import { MyCustomService } from './my-custom.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	constructor( 
		myService: MyCustomService 
	) {
		myService.log( 'here' )
	}
}
