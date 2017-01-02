import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from "./app.routes";
import { RouterModule }  from '@angular/router';
import { CommonModule } from '@angular/common';
import { MapComponent, MapRoutes } from './mapcomponent/map.component';
import { EventComponent, EventRoutes } from './eventcomponent/eventmain.component';


@NgModule({
  declarations: [
    AppComponent, EventComponent, MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


