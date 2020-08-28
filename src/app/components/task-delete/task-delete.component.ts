import { Component, OnInit, Input } from '@angular/core';
import { SwalDirective } from 'src/app/directives/swal.directive';
import { TaskReadComponent } from '../task-read/task-read.component';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

  @Input() items: any;

  constructor(
    private _swalDirective: SwalDirective,
    private _taskReadComponent: TaskReadComponent,
  ) { }

  ngOnInit(): void { }

  removeItem() {
    let index: number = this._taskReadComponent.tasks.indexOf(this.items.id);
    this._swalDirective.swalAlert(
      'warning',
      'Deseja excluir tarefa?',
      this._taskReadComponent.tasks.splice(index, 1),
      'Tarefa excluida!',
    )
  }
}
