import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Assignment } from '../../models/assignment';
import { SimulatorApiService } from '../../services/simulatorApi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  public form: FormGroup;
  public tarefa: Assignment = {
    id: 0,
    nome: '',
    status: false
  }

  // @Output() teste: EventEmitter<any> = new EventEmitter();

  constructor(
    private _simulatorApiService: SimulatorApiService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      'tarefa': [null, Validators.compose([
        Validators.required,
      ])],
    });
  }

  ngOnInit() { }

  salvarItem() {
    if (this.form.value.tarefa == null || this.form.value.tarefa == '') {
      this.getSwal();
    } else {
      let id = this.tarefa.id++;
      let nome = this.form.value.tarefa;
      let status = this.tarefa.status;
      this._simulatorApiService.tasks.push(new Assignment(id, nome, status));
      this.form.get('tarefa').setValue('');
      // this.teste.emit(this._api.todos);
    }
  }

  enviarDados() {

    // let novoItem = this._api.getData('tarefas');
    // for (let i in novoItem) {
    //   this._api.todos.push(novoItem[i]);
    // }
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
      this._simulatorApiService.setData('tarefas', this._simulatorApiService.tasks);
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
