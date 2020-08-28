import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../models/assignment';
import { ModalTaskUpdateComponent } from '../modal-task-update/modal-task-update.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SimulatorApiService } from '../../services/simulatorApi.service';
import { ToastDirective } from 'src/app/directives/toast.directive';
import { SwalDirective } from 'src/app/directives/swal.directive';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: any[] = [];

  constructor(
    private _modalService: NgbModal,
    private _simulatorApiService: SimulatorApiService,
    private _toastDirective: ToastDirective,
    private _swalDirective: SwalDirective,
  ) { }

  ngOnInit(): void {
    let item = this._simulatorApiService.getData('tasks');
    if (item.length > 0) {
      for (let i in item) {
        this._simulatorApiService.tasks.push(item[i]);
      }
    }
    this.tasks = this._simulatorApiService.tasks;
  }

  removeItem(item) {
    let index: number = this.tasks.indexOf(item);
    this._swalDirective.swalAlert(
      'warning',
      'Deseja excluir tarefa?',
      this.tasks.splice(index, 1),
      'Tarefa excluida!',
    )
  }

  editItem(item) {
    const ref = this._modalService.open(ModalTaskUpdateComponent);
    ref.componentInstance.updatedTask.subscribe((result) => {
      item.title = result;
      this._toastDirective.showMessage('Tarefa atualizada!')
    })
  }

  markStatus(item) {
    item.status = !item.status;
  }

}
