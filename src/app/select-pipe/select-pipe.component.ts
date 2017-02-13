import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-pipe',
  templateUrl: './select-pipe.component.html',
  styleUrls: ['./select-pipe.component.css']
})
export class SelectPipeComponent implements OnInit {

    gender: string = 'male';
    inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};

    constructor() { }

    ngOnInit() {
    }

}
