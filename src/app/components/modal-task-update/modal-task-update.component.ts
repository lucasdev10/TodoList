import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SimulatorApiService } from '../../services/simulatorApi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-task-update',
  templateUrl: './modal-task-update.component.html',
  styleUrls: ['./modal-task-update.component.css']
})
export class ModalTaskUpdateComponent implements OnInit {

  @Output() novoValor: EventEmitter<any> = new EventEmitter

  tarefaNova: any;
  posicao: number

  forms: FormGroup;

  constructor(
    public _modal: NgbActiveModal,
    private _simulatorApiService: SimulatorApiService,
    private _formBuilder: FormBuilder
  ) {
    this.forms = this._formBuilder.group({
      'tarefa': [null, Validators.required]
    })
   }

  ngOnInit() { }

  update() {
    let tarefa = this.forms.value.tarefa;
    this._modal.close();
    this.novoValor.emit(tarefa);
  };

  close() {
    this._modal.close();
  };

}