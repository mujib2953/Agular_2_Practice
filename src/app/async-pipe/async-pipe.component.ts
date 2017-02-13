import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

    arrived: boolean = false;
    greetings: Promise<string> = null;

    resolveFunc: Function = null;

    constructor() {
        this.reset();
    }

    ngOnInit() {
    }

    clicked(): void {

        if( this.arrived ) {
            this.reset();
        } else {
            this.resolveFunc( 'I\'m resolved....' );
        }
        this.arrived = !this.arrived;
        console.log( this.greetings );
        console.log( 'button clicked...' );
    }

    reset(): void {
        this.greetings = new Promise<string>( ( resolve, reject ) => {
            this.resolveFunc = resolve;
        } );
    }


}
