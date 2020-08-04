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
    this.getSwal(item);
    // let index: number = this.todos.indexOf(item);
    // this.todos.splice(index, 1);
    // if (this.todos.length == 0) {
    //   this.show = false;
    // }
  }

  editarItem(item) {
    let index: number = this.todos.indexOf(item);
    const ref = this._modalService.open(ModalUpdateComponent);
    ref.componentInstance.posicao = index;
    ref.componentInstance.novoValor.subscribe((result) => {
      item.nome = result;
     this.getSwals();
    })
  }

  markAsDone(todo) {
    todo.status = true;
  }

  markAsUndone(todo) {
    todo.status = false;
  }

  getSwal(item) {
    const Swal = require('sweetalert2')
    Swal.fire({
      width: 400,
      title: 'Deseja mesmo excluir?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!'
    }).then((result) => {
      if (result.value) {
        let index: number = this.todos.indexOf(item);
        this.todos.splice(index, 1);
        if (this.todos.length == 0) {
          this.show = false;
        }
        Swal.fire({
          icon: 'success',
          showConfirmButton: false,
          title: 'O item foi excluido da lista.',
          timer: 1500
        }
        )
      }
    })
  }

  getSwals() {
    const Swal = require('sweetalert2')
    Swal.fire({
      width: 250,
      position: 'center',
      icon: 'success',
      text: 'Tarefa atualizada!',
      showConfirmButton: false,
      timer: 1500
    })
  }



}
