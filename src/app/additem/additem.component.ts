import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';
import { ApiService } from '../mock.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  public form: FormGroup;
  public tarefa: Todo = {
    id: 0,
    nome: '',
    status: false
  }

  // @Output() teste: EventEmitter<any> = new EventEmitter();

  constructor(
    private _api: ApiService,
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
      this._api.todos.push(new Todo(id, nome, status));
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
      this._api.setData('tarefas', this._api.todos);
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
