import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../mock.service';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent implements OnInit {

  @Output() novoValor: EventEmitter<any> = new EventEmitter

  tarefaNova: any;
  posicao: number

  constructor(
    public _modal: NgbActiveModal,
    private _api: ApiService,
  ) { }

  ngOnInit() {
    console.log(this.posicao)
  }

  novaTarefa(event) {
    this.tarefaNova = event
  }

  update() {
    'use strict';
    let form = document.getElementsByClassName('needs-validation');
    let validation = Array.prototype.filter.call(form, function (form) {
      form.classList.add('custom-was-validated');
    });
    this.updateConfirm();
  };

  close() {
    this._modal.close();
  };

  updateConfirm(): void {
    this._modal.close()
    this.novoValor.emit(this.tarefaNova)
  }
}