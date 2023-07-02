import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormPageComponent } from './form-page/form-page.component';
import { FormListComponent } from './form-list/form-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'formGroup', component: FormGroupComponent },
  { path: 'formPage', component: FormPageComponent },
  { path: 'formList', component: FormListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModule { }
