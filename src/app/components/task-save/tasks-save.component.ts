import { Component, OnInit } from '@angular/core';
import { SwalDirective } from 'src/app/directives/swal.directive';
import { SimulatorApiService } from 'src/app/services/simulatorApi.service';

@Component({
  selector: 'app-tasks-save',
  templateUrl: './tasks-save.component.html',
  styleUrls: ['./tasks-save.component.css']
})
export class TaskSaveComponent implements OnInit {

  constructor(
    private _swalDirective: SwalDirective,
    private _simulatorApiService: SimulatorApiService
    ) { }

  ngOnInit(): void {
  }

  sendData() {
    this._swalDirective.swalAlert(
      'info',
      'Deseja salvar suas tarefas?',
      this._simulatorApiService.setData('tasks', this._simulatorApiService.tasks),
      'Salvo com sucesso!',
      false
    );
  }

}
