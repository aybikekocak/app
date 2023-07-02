import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent {
  forms: { label: string, type: string, options?: string[] }[] = [];
  dataSource!: MatTableDataSource<{ label: string; type: string; options?: string[]; }>;
  selectedForm: { label: string, type: string, options?: string[] } | null = null;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params && params['forms']) {
        this.forms = JSON.parse(params['forms']);
        this.dataSource = new MatTableDataSource<{ label: string, type: string, options?: string[] }>(this.forms);
      }
    });
  }

  fillForm(form: { label: string, type: string, options?: string[] }) {
    this.router.navigate(['/form-page'], {
      queryParams: {
        label: form.label,
        type: form.type
      }
    });
  }


  editForm(form: { label: string, type: string, options?: string[] }) {
    this.selectedForm = { ...form };
  }

  deleteForm(index: number) {
    if (index > -1) {
      this.forms.splice(index, 1);
      this.dataSource.data = this.forms;
    }
  }
}
