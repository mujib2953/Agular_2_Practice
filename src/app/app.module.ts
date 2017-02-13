import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { ObservingComponent } from './observing/observing.component';
import { CurrencyPipeComponent } from './currency-pipe/currency-pipe.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { DecimalPipeComponent } from './decimal-pipe/decimal-pipe.component';
import { PluralPipeComponent } from './plural-pipe/plural-pipe.component';
import { SelectPipeComponent } from './select-pipe/select-pipe.component';
import { JsonPipeComponent } from './json-pipe/json-pipe.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,

    AsyncPipeComponent,
    ObservingComponent,
    CurrencyPipeComponent,
    DatePipeComponent,
    DecimalPipeComponent,
    PluralPipeComponent,
    SelectPipeComponent,
    JsonPipeComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
