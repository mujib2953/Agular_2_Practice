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
	nRoundCount: number;

	constructor(
		public myService: MyCustomService
	) {
		this.aRound = myService.sharedData.aRoundData;
		this.nActiveRound = myService.sharedData.nActiveRound;
		this.nRoundCount = myService.sharedData.nRoundCount;

		myService.generateRoundColor();
	}

	ngOnInit() {
	}

	resetSelection(): void {
		this.myService.resetUserSelection();
	}

	submitSelection(): void {
		this.myService.submitUserSelection();
		this.nRoundCount = this.myService.sharedData.nRoundCount;
		this.nActiveRound = this.myService.sharedData.nActiveRound;
	}
}
