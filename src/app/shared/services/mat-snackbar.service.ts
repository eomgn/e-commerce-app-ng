import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MatSnackbarService {
  constructor(private _snackbar: MatSnackBar) {}

  openMessage(message: string) {
    this._snackbar.open(message, 'X', {
      duration: 900,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
