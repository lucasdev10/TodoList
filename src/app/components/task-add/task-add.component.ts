import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../models/assignment';
import { SimulatorApiService } from '../../services/simulatorApi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      'assignment': [null, Validators.compose([
        Validators.required,
      ])],
    });
  }

  ngOnInit() { }

  saveItem() {
    if (this.form.value.assignment == null || this.form.value.assignment == '') {
      this.getSwal();
    } else {
      let id = this.assignment.id++;
      let title = this.form.value.assignment;
      let status = this.assignment.status;
      this._simulatorApiService.tasks.push(new Assignment(id, title, status));
      this.form.get('assignment').setValue('');
    }
  }

  sendData() {
    this.getSwals();
  }

  getSwal() {
    const Swal = require('sweetalert2')
    Swal.fire({
      width: 250,
      position: 'center',
      icon: 'error',
      text: 'Digite uma tarefa.',
      showConfirmButton: false,
      timer: 2000
    })
  }

  getSwals() {
    const Swal = require('sweetalert2')
    Swal.fire({
      width: 400,
      title: 'Deseja salvar suas tarefas no banco de dados?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, salvar!'
    }).then((result) => {
      this._simulatorApiService.setData('tasks', this._simulatorApiService.tasks);
      if (result.value) {
        Swal.fire({
          icon: 'success',
          showConfirmButton: false,
          title: 'Lista de tarefas salva com sucesso!',
          timer: 1500
        }
        )
      }
    })
  }


}
