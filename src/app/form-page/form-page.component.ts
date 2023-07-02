import { Component, OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  formLabel: string = '';
  formType: string = '';
  formOptions: string[] = [];
  formControl: FormControl = new FormControl();

  constructor(
    private route: ActivatedRoute,

  ) { }
        ngOnInit() {
          this.route.queryParams.subscribe(params => {
            console.log(params)
            if (params && params['label'] && params['type']) {
              this.formLabel = params['label'];
              this.formType = params['type'];

              if (this.formType === 'select') {
                this.formOptions = [];
                if (params['options']) {
                  this.formOptions = JSON.parse(params['options']);
                }
              }
            }
          });
        }

        addToOptions() {
          const newValue = this.formControl.value;
          this.formOptions.push(newValue);
          this.formControl.reset();
          this.formOptions = [...this.formOptions];
        }

}
