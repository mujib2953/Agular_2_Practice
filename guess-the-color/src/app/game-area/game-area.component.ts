import { Component, OnInit } from '@angular/core';

import { MyCustomService } from '../my-custom.service';

@Component({
	selector: 'app-game-area',
	templateUrl: './game-area.component.html',
	styleUrls: ['./game-area.component.css']
})
export class GameAreaComponent implements OnInit {
	
	aRound: any;
	nActiveRound: number;

	constructor(
		myService: MyCustomService
	) {
		this.aRound = myService.sharedData.aRoundCount;
		this.nActiveRound = myService.sharedData.nActiveRound;
	}

	ngOnInit() {
	}

}
