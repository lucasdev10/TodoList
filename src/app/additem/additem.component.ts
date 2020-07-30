import { Component, OnInit, Input } from '@angular/core';
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

  adicionarItemClick() {
    this.salvarItem();
  }

  salvarItem() {
    if (this.form.value.tarefa == null || this.form.value.tarefa == '') {
      this.getSwal();
    } else {
      let id = this.tarefa.id++;
      let nome = this.form.value.tarefa;
      let status = this.tarefa.status;
      this._api.todos.push(new Todo(id, nome, status));
      this.tarefa.nome = '';
      console.log(this.form.value.tarefa);
    }
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


}
