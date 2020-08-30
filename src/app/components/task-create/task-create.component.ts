import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../models/assignment';
import { SimulatorApiService } from '../../services/simulatorApi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastDirective } from 'src/app/directives/toast.directive';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  public form: FormGroup;
  public assignment: Assignment = {
    id: 0,
    title: '',
    status: false
  }

  constructor(
    private _simulatorApiService: SimulatorApiService,
    private _formBuilder: FormBuilder,
    private _toastDirective: ToastDirective,
  ) {
    this.form = this._formBuilder.group({
      'assignment': [null, Validators.compose([
        Validators.required,
      ])],
    });
  }

  ngOnInit() { }

  saveItem() {
    if (this.form.value.assignment == null || this.form.value.assignment == '') {
      this._toastDirective.showMessage("ERRO! Digite uma tarefa.", true);
    } else {
      let id = this.assignment.id++;
      let title = this.form.value.assignment;
      let status = this.assignment.status;
      this._simulatorApiService.tasks.push(new Assignment(id, title, status));
      this.form.get('assignment').setValue('');
    }
  }

}
