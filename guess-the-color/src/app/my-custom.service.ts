import { Injectable } from '@angular/core';

@Injectable()
export class MyCustomService {

	sharedData: any  = {
		textData: {
			gameTitle: 'Gusse the color',
		},
		aRoundCount: Array( 10 ).fill(10).map( (x,i) => ( i + 1 ) ),
		nActiveRound: 1,
	};

	constructor() { }

	log( sMsg: string ) {
		
		console.log( '%c ' + sMsg + ' ', 'background: black; color: white;' );
		
	}

}
