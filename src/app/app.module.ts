import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdditemComponent } from './additem/additem.component';
import { DisplayComponent } from './display/display.component';
import { EditemComponent } from './editem/editem.component';
import { ModalUpdateComponent } from './modal-update/modal-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdditemComponent,
    DisplayComponent,
    EditemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalUpdateComponent]
})
export class AppModule { }
