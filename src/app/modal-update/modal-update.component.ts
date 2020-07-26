import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent implements OnInit {

  isValidFormSubmitted = null;
  isLoading = false;
  createCountyForm: FormGroup;

  constructor(
    public _modal: NgbActiveModal,
  ) { }

  ngOnInit() { }

  updateConfirm(): void {
    let nameCounty: string;
    nameCounty = this.createCountyForm.value.nameCounty;
  }

  update() {
    'use strict';
    let form = document.getElementsByClassName('needs-validation');
    let validation = Array.prototype.filter.call(form, function (form) {
      form.classList.add('custom-was-validated');
    });
    this.isValidFormSubmitted = false;
    if (this.createCountyForm.invalid || this.isLoading) {
      return;
    }
    this.isValidFormSubmitted = true;
    this.isLoading = true;

    this.updateConfirm();
  };

  close() {
    this._modal.close();
  };

}