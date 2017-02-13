import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-observing',
  templateUrl: './observing.component.html',
  styleUrls: ['./observing.component.css']
})
export class ObservingComponent implements OnInit {

    time: Observable<any> = null;

    constructor() { }

    ngOnInit() {
        this.time = new Observable<string>( observer => {
            setInterval(() => observer.next( new Date().toString() ), 1000 )
        } );
    }

}
