import { Injectable } from '@angular/core';

@Injectable()
export class MyCustomService {

	sharedData: any  = {
		textData: {
			gameTitle: 'Gusse the color',
		}
	};

	constructor() { }

	log( sMsg: string ) {
		
		console.log( '%c ' + sMsg + ' ', 'background: black; color: white;' );
		
	}

}
