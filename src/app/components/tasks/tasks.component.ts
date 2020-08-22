import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../models/assignment';
import { ModalTaskUpdateComponent } from '../modal-task-update/modal-task-update.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SimulatorApiService } from '../../services/simulatorApi.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  status: boolean;
  title = 'Ajustar Tarefas';
  show: boolean = true;

  todos: any[] = [];

  constructor(
    private _modalService: NgbModal,
    private _simulatorApiService: SimulatorApiService
  ) { }

  ngOnInit(): void {
    let item = this._simulatorApiService.getData('tarefas');
    if (item.length > 0) {
      for (let i in item) {
        this._simulatorApiService.tasks.push(item[i]);
      }
    }
    this.todos = this._simulatorApiService.tasks;

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
    const ref = this._modalService.open(ModalTaskUpdateComponent);
    ref.componentInstance.posicao = index;
    ref.componentInstance.updatedTask.subscribe((result) => {
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
