import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../mock.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent implements OnInit {

  @Output() novoValor: EventEmitter<any> = new EventEmitter

  tarefaNova: any;
  posicao: number

  forms: FormGroup;

  constructor(
    public _modal: NgbActiveModal,
    private _api: ApiService,
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