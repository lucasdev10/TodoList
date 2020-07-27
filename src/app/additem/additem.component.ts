import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { ApiService } from '../mock.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  tarefa: any = {
    nome: '',
  }

  constructor(
    private _api: ApiService,
  ) { }

  ngOnInit(): void { }

  adicionarItem() {
    if (this.tarefa.nome == undefined || this.tarefa.nome == "") {
      alert("Digite uma tarefa")
    } else {
      let nome = this.tarefa.nome;
      let status = false;
      let id: number = +1
      this._api.todos.push(new Todo(nome, status))
      this.tarefa.nome = ''
    }
  }

}
