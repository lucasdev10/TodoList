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

  @Output() updatedTask: EventEmitter<any> = new EventEmitter

  forms: FormGroup;

  constructor(
    public _modalActive: NgbActiveModal,
    private _simulatorApiService: SimulatorApiService,
    private _formBuilder: FormBuilder
  ) {
    this.forms = this._formBuilder.group({
      'assignment': [null, Validators.required]
    })
   }

  ngOnInit() { }

  update() {
    let assignment = this.forms.value.assignment;
    this.updatedTask.emit(assignment);
    this._modalActive.close();
  };

  close() {
    this._modalActive.close();
  };

}