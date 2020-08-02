import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { ModalUpdateComponent } from '../modal-update/modal-update.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../mock.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  status: boolean;
  title = 'Ajustar Tarefas';
  show: boolean = true;

  todos: any[] = [];

  constructor(
    private _modalService: NgbModal,
    private _api: ApiService
  ) { }

  ngOnInit(): void {
    let item = this._api.getData('tarefas');
    if (item.length > 0) {
      for (let i in item) {
        this._api.todos.push(item[i]);
      }
    }
    this.todos = this._api.todos;
    
    // this.todos = this._api.todos;


  }

  removerItem(item) {
    let index: number = this.todos.indexOf(item);
    this.todos.splice(index, 1);
    if (this.todos.length == 0) {
      this.show = false;
    }
  }

  editarItem(item) {
    let index: number = this.todos.indexOf(item);
    const ref = this._modalService.open(ModalUpdateComponent);
    ref.componentInstance.posicao = index;
    ref.componentInstance.novoValor.subscribe((result) => {
      item.nome = result;
    })
  }

  markAsDone(todo) {
    todo.status = true;
  }

  markAsUndone(todo) {
    todo.status = false;
  }
}
