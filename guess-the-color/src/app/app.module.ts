import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { DevelopeFooterComponent } from './develope-footer/develope-footer.component';

import { MyCustomService } from './my-custom.service';
import { GameAreaComponent } from './game-area/game-area.component';
import { CirclesComponent } from './circles/circles.component';

@NgModule({
	declarations: [
	AppComponent,
	GameBoardComponent,
	DevelopeFooterComponent,
	GameAreaComponent,
	CirclesComponent
],
imports: [
	BrowserModule
],
providers: [
	MyCustomService
],
bootstrap: [ AppComponent ]
})
export class AppModule { }
