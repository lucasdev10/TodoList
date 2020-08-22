import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskAddComponent } from './components/task-add/task-add.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ModalTaskUpdateComponent } from './components/modal-task-update/modal-task-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskAddComponent,
    TasksComponent,
    ModalTaskUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalTaskUpdateComponent]
})
export class AppModule { }
