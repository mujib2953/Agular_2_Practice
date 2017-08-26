import { Component, OnInit } from '@angular/core';

import { MyCustomService } from '../my-custom.service';

@Component({
	selector: 'app-game-board',
	templateUrl: './game-board.component.html',
	styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

	textData: any = {};

	constructor(
		myService: MyCustomService
	) {
		this.textData = myService.sharedData.textData; 
	
	}

	ngOnInit() {
	}

}
