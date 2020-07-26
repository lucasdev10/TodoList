import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent implements OnInit {

  newValor: any;

  constructor(
    public _modal: NgbActiveModal,
    private _api: ApiService
  ) { }

  ngOnInit() { 
    console.log(this.newValor)
  }

  updateConfirm(): void {
    this._api.todos = this.newValor
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

}