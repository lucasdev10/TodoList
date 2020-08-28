import { Directive, Injectable } from '@angular/core';
import { SimulatorApiService } from '../services/simulatorApi.service';
import { ToastDirective } from './toast.directive';

@Injectable({
    providedIn: 'root'
})

@Directive({
    selector: '[appToast]'
})
export class SwalDirective {

    constructor(private _toastDirective: ToastDirective) { }

    swalAlert(icon?, title?, func?, showMessage?, isError?) {
        const Swal = require('sweetalert2')
        Swal.fire({
            width: 350,
            title: title,
            icon: icon,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            func;
            if (result.value) {
                this._toastDirective.showMessage(showMessage, isError)
            }
        })
    }
}