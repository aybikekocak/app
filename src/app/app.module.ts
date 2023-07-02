import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { FormPageComponent } from './form-page/form-page.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { FormListComponent } from './form-list/form-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormEditComponent } from './form-edit/form-edit.component';
import { MatDialogModule } from '@angular/material/dialog';


const routes: Routes = [
  { path: 'form-group', component: FormGroupComponent },
  { path: 'form-page', component: FormPageComponent },
  { path: 'form-list', component: FormListComponent },
  { path: '', redirectTo: 'form-group', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FormGroupComponent,
    FormPageComponent,
    HeaderComponent,
    FormListComponent,
    FormEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    RouterModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
