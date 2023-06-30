import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent {
  @Output() formFieldsChanged = new EventEmitter<any[]>();

  fields: any[] = [];

  addField() {
    const newField = {
      label: '',
      type: ''
    };
    this.fields.push(newField);
  }

  saveForm() {
    console.log(this.fields)
    this.formFieldsChanged.emit(this.fields);
  }
}
