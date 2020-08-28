import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../models/assignment';
import { SimulatorApiService } from '../../services/simulatorApi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastDirective } from 'src/app/directives/toast.directive';
import { SwalDirective } from 'src/app/directives/swal.directive';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

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
    private _swalDirective: SwalDirective,
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

  sendData() {
    this._swalDirective.swalAlert(
      'info',
      'Deseja salvar suas tarefas?',
      this._simulatorApiService.setData('tasks', this._simulatorApiService.tasks),
      'Salvo com sucesso!',
      false
    );
  }

}
