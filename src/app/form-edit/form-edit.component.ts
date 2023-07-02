import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent {

  @Input() selectedForm!: { label: string, type: string, options?: string[] } | null;

  constructor(private router: Router) { }

  saveChanges() {
    // Değişiklikleri kaydetme işlemleri yapılabilir
    console.log('Değişiklikler kaydedildi:', this.selectedForm);
    this.router.navigate(['/form-list']);
  }
}
