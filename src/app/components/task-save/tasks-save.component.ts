import { Component, OnInit } from '@angular/core';
import { SwalDirective } from 'src/app/directives/swal.directive';

@Component({
  selector: 'app-task-save',
  templateUrl: './tasks-save.component.html',
  styleUrls: ['./tasks-save.component.css']
})
export class TaskSaveComponent implements OnInit {

  constructor(
    private _swalDirective: SwalDirective
  ) { }

  ngOnInit(): void {
  }

  sendData() {
    this._swalDirective.swalAlert(
      'info',
      'Deseja salvar suas tarefas?',
      'toSave',
      'Salvo com sucesso!',
    );
  }

}
