import { Injectable } from '@angular/core';

@Injectable()
export class MyCustomService {

	sharedData: any  = {
		textData: {
			gameTitle: 'Gusse the color',
		},
		nActiveRound: 1,
		allAvailableColor: [ 'Red', 'Green', 'Blue', 'Cyan', 'Yellow', 'Magenta' ],
		aRoundData: [
			{
				nRoundNum: 1,
				aGenSeq: [],
				userSeq: [],
				isPassed: false
			},
			{
				nRoundNum: 2,
				aGenSeq: [],
				userSeq: [],
				isPassed: false
			}
		] 
	};

	constructor() {
		console.log( this );
	}

	log( sMsg: string ): void {
		
		console.log( '%c ' + sMsg + ' ', 'background: black; color: white;' );
		
	}

	generateRoundColor(): void {
		let nLen: number = this.sharedData.allAvailableColor.length;

		for( let i in Array( 4 ).fill( 1 ) ) {
			
			this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].aGenSeq[ i ] = this.sharedData.allAvailableColor[ this.getRandomIntInclusive( 0, nLen - 1 ) ];;

		}

	}

	getRandomIntInclusive( min: number, max: number ): number {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
	}

}
