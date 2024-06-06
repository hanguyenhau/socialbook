import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FaIconComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
