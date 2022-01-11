import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RaceComponent} from "./Race/race.component";
import {RaceService} from "./Race/race.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
