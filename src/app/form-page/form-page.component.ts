import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  @Input() formFields: any[] = [];


  form: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    console.log(this.formFields)
  }
  createForm() {
    const formControls: any = {};
    for (const field of this.formFields) {
      formControls[field.name] = [''];
    }
    this.form = this.formBuilder.group(formControls);
  }

  submitForm() {
    if (this.form.valid) {
      // Formu gönderme işlemleri burada gerçekleştirilebilir
      console.log(this.form.value);
    }
  }
}
