import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { FormEditComponent } from '../form-edit/form-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent {
  forms: { label: string, type: string, options?: string[] }[] = [];
  dataSource!: MatTableDataSource<{ label: string; type: string; options?: string[] }>;
  selectedForm: { label: string, type: string, options?: string[] } | null = null;
  editableFormIndex: number | null = null;


  constructor(private route: ActivatedRoute, private router: Router,private dialog: MatDialog,private changeDetectorRef: ChangeDetectorRef) { this.forms = []; }

  saveFormsToSessionStorage() {
    sessionStorage.setItem('forms', JSON.stringify(this.forms));
  }

  ngOnInit() {
    const storedForms = sessionStorage.getItem('forms');
    if (storedForms) {
      this.forms = JSON.parse(storedForms);
      this.dataSource = new MatTableDataSource<{ label: string, type: string, options?: string[] }>(this.forms);
    }

    this.route.queryParams.subscribe(params => {
      console.log(params)
      if (params && params['forms']) {
        this.forms = JSON.parse(params['forms']);
        this.dataSource = new MatTableDataSource<{ label: string, type: string, options?: string[] }>(this.forms);
        this.saveFormsToSessionStorage();
      }
    });
  }

  fillForm(form: { label: string, type: string, options?: string[] }) {
    this.router.navigate(['/form-page'], {
      queryParams: {
        label: form.label,
        type: form.type,
        options: JSON.stringify(form.options)
      }
    });
  }

  openFormEditDialog(form: { label: string, type: string, options?: string[] }, index: number) {
    const dialogRef = this.dialog.open(FormEditComponent, {
      data: {
        form: { ...form },
        index: index
      }
    });

    dialogRef.afterClosed().subscribe(updatedForm => {
      if (updatedForm) {
        this.forms[index] = updatedForm;
        this.dataSource.data = [...this.forms];
        this.changeDetectorRef.detectChanges();
      }

      this.editableFormIndex = null;
    });
  }
  editForm(form: { label: string, type: string, options?: string[] }, index: number) {
    this.openFormEditDialog(form, index);
  }


  deleteForm(index: number) {
    if (index > -1) {
      this.forms.splice(index, 1);
      this.dataSource.data = [...this.forms];
      this.dataSource._updateChangeSubscription();
      this.changeDetectorRef.detectChanges();
    }
  }
}
