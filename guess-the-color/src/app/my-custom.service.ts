import { Injectable } from '@angular/core';

@Injectable()
export class MyCustomService {

	sharedData: any  = {
		textData: {
			gameTitle: 'Gusse the color',
		},
		nActiveRound: 1,
		nRoundCount: 0,
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
		],
		nScore: 0,
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
	
	updateColor( p_color: string ): void {
		
		if( this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].userSeq[ 0 ] == undefined ) {
			this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].userSeq[ 0 ] = p_color;
		} else if( this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].userSeq[ 1 ] == undefined ) {
			this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].userSeq[ 1 ] = p_color;
		} else if( this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].userSeq[ 2 ] == undefined ) {
			this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].userSeq[ 2 ] = p_color;
		} else if( this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].userSeq[ 3 ] == undefined ) {
			this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].userSeq[ 3 ] = p_color;
		}
	}

	resetUserSelection(): void {
		this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].userSeq = [];
	}

	submitUserSelection(): void {

		this.sharedData.nRoundCount++;

		if( this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].userSeq.length != 4 ) {
			alert( 'Please guess all 4 colors.' );
			return;
		}

		let users: string = JSON.stringify( this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].userSeq );
		let copms: string = JSON.stringify( this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].aGenSeq );

		if( users === copms ) {
			console.log( 'Passed' );
			this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].isPassed = true;
			this.doGlobalThings();
			return;
		} else {
			console.log( 'Failed' );
			this.checkEachColor();
		}

		if( this.sharedData.nRoundCount % 3 == 0 ) {
			this.doGlobalThings();
		}

		console.log( this );
	}

	doGlobalThings(): void {

		// if( this.sharedData.nRoundCount % 3 != 0 ) {
			this.sharedData.nRoundCount = 0;
			this.sharedData.nActiveRound++;

			if( this.sharedData.nActiveRound > this.sharedData.aRoundData.length )
				document.location.reload();

			this.generateRoundColor();
		// }
	}

	checkEachColor(): void {
		
		let compArr: any = this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].aGenSeq;
		let userArr: any = this.sharedData.aRoundData[ this.sharedData.nActiveRound - 1 ].userSeq;

		if( compArr[ 0 ] != userArr[ 0 ]  )
			userArr[ 0 ] = null;
		if( compArr[ 1 ] != userArr[ 1 ]  )
			userArr[ 1 ] = null;
		if( compArr[ 2 ] != userArr[ 2 ]  )
			userArr[ 2 ] = null;
		if( compArr[ 3 ] != userArr[ 3 ]  )
			userArr[ 3 ] = null;
	}
}
