import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdditemComponent } from './additem/additem.component';
import { DisplayComponent } from './display/display.component';
import { EditemComponent } from './editem/editem.component';
import { ModalUpdateComponent } from './modal-update/modal-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditemComponent,
    DisplayComponent,
    EditemComponent,
    ModalUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
