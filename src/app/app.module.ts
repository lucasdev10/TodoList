import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalTaskUpdateComponent } from './components/modal-task-update/modal-task-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastDirective } from './directives/toast.directive';
import { SwalDirective } from './directives/swal.directive';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { HomeComponent } from './view/home/home.component';
import { TaskSaveComponent } from './components/task-save/tasks-save.component';
import { TaskReadComponent } from './components/task-read/task-read.component';
import { TaskDeleteComponent } from './components/task-delete/task-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskReadComponent,
    ModalTaskUpdateComponent,
    ToastDirective,
    SwalDirective,
    TaskCreateComponent,
    HomeComponent,
    TaskSaveComponent,
    TaskDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalTaskUpdateComponent]
})
export class AppModule { }
