import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent {
  @Output() formFieldsChanged = new EventEmitter<any[]>();

  fields: any[] = [];
  formFields: any[] = [];

  addField() {
    const newField = {
      label: '',
      type: ''
    };
    this.fields.push(newField);
  }

  convertFieldsToFormArray(fields: any[]): any {
    const formArray: any = {
      id: this.fields.length + 1,
      form: []
    };

    fields.forEach((field, index) => {
      const formField = {
        label: field.label,
        type: field.type
      };
      formArray.form.push(formField);
    });

      return formArray;
  }








  convertFields() {
    const formArray = this.convertFieldsToFormArray(this.fields);
    const formFields = JSON.parse(JSON.stringify(formArray.form));

    this.fields.length = 0; // fields dizisini boşaltıyoruz
    formArray.form = formFields;

  console.log(formArray);
  }

  saveForm() {
    console.log(this.fields)
    this.formFieldsChanged.emit(this.fields);
  }
}
