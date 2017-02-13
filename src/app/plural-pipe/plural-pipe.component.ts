import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plural-pipe',
  templateUrl: './plural-pipe.component.html',
  styleUrls: ['./plural-pipe.component.css']
})
export class PluralPipeComponent implements OnInit {

    messages: any[] = [ 'Messges_1' ];

    messagesMapping: { [ k: string ]: string } = { '=0': 'No Messages.', '=1': 'One Message.', 'other': '# Messages.' }

    constructor() { }

    ngOnInit() {
    }

}
