import { Directive, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

@Directive({
  selector: '[appToast]'
})
export class ToastDirective {

  constructor(private _toastMessage: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this._toastMessage.open(msg,'', {
      duration: 2500,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

}