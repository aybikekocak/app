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

  saveFormsToSessionStorage() {
    sessionStorage.setItem('forms', JSON.stringify(this.forms));
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

      const formExists = this.forms.some(form => form.label === newForm.label && form.type === newForm.type);
      if (!formExists) {
        this.forms.push(newForm);
      }
    }

    this.label = '';
    this.inputType = 'text';
    this.options = '';

    this.saveFormsToSessionStorage();

    this.router.navigate(['/form-list'], {
      queryParams: {
        forms: JSON.stringify(this.forms)
      }
    });
  }


}
