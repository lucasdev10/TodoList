import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskAddComponent } from './components/task-add/task-add.component';
import { TasksComponent } from './components/tasks/tasks.component';
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

@NgModule({
  declarations: [
    AppComponent,
    TaskAddComponent,
    TasksComponent,
    ModalTaskUpdateComponent,
    ToastDirective,
    SwalDirective,
    TaskCreateComponent,
    HomeComponent,
    TaskSaveComponent
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
