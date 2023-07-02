import { Component , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

interface FormField {
  label: string;
  type: string;
  options?: string[];
}

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent {
  // @Output() formFieldsChanged = new EventEmitter<any[]>();

  // fields: any[] = [];
  // formFields: any[] = [];

  // addField() {
  //   const newField = {
  //     label: '',
  //     type: ''
  //   };
  //   this.fields.push(newField);
  // }

  // convertFieldsToFormArray(fields: any[]): any {
  //   const formArray: any = {
  //     id: this.fields.length + 1,
  //     form: []
  //   };

  //   fields.forEach((field, index) => {
  //     const formField = {
  //       label: field.label,
  //       type: field.type
  //     };
  //     formArray.form.push(formField);
  //   });

  //     return formArray;
  // }








  // convertFields() {
  //   const formArray = this.convertFieldsToFormArray(this.fields);
  //   const formFields = JSON.parse(JSON.stringify(formArray.form));

  //   this.fields.length = 0; // fields dizisini boşaltıyoruz
  //   formArray.form = formFields;

  // console.log(formArray);
  // }

  // saveForm() {
  //   console.log(this.fields)
  //   this.formFieldsChanged.emit(this.fields);
  // }

  label: string = '';
  inputType: string = 'text';
  options: string = '';
  forms: { label: string, type: string, options?: string[] }[] = [];

  constructor(private router: Router) {}

  addField() {
    const field = { label: this.label, type: this.inputType };
    if (this.inputType === 'select') {
      const options = this.options.split('\n').map(option => option.trim());
      //@ts-ignore
      field.options = options.length > 0 ? options : undefined;
    }
    this.forms.push(field);
    this.label = '';
    this.inputType = 'text';
    this.options = '';
  }

  saveForm() {
    if (this.label && this.inputType) {
      const newForm = {
        label: this.label,
        type: this.inputType
      };

      if (this.inputType === 'select') {
        //@ts-ignore
        newForm['options'] = this.options.split('\n');
      }

      // Formun zaten listede olup olmadığını kontrol et
      const formExists = this.forms.some(form => form.label === newForm.label && form.type === newForm.type);
      if (!formExists) {
        this.forms.push(newForm);
      }
    }
    this.router.navigate(['/form-list'], {
      queryParams: {
        forms: JSON.stringify(this.forms)
      }
    });
  }
}
