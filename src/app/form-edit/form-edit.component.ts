import { Component, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent {
  form: { label: string, type: string, options?: string[] };
  index: number;

  constructor(@Inject(MAT_DIALOG_DATA) private data: { form: { label: string, type: string, options?: string[] }, index: number }, private dialogRef: MatDialogRef<FormEditComponent>) {
    this.form = data.form;
    this.index = data.index;
  }

  saveForm() {
    this.dialogRef.close(this.form)
  }
}
