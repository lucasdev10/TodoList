import { Component, OnInit, Input } from '@angular/core';
import { TaskReadComponent } from '../task-read/task-read.component';
import { ToastDirective } from 'src/app/directives/toast.directive';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

  @Input() items: any;

  constructor(
    private _taskReadComponent: TaskReadComponent,
    private _toastDirective: ToastDirective
  ) { }

  ngOnInit(): void { }

  removeItem() {
    let index: number = this._taskReadComponent.tasks.indexOf(this.items);
    this._taskReadComponent.tasks.splice(index, 1);    
    this._toastDirective.showMessage("Tarefa excluida!!", false);
  }
}
