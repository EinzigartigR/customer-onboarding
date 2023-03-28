import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactDetComponent } from './contact-det.component';


const ContactDetModuleRoute: Routes = [
  {
    path: '',
    component: ContactDetComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ContactDetModuleRoute)
  ],
  exports: [RouterModule]
})
export class ContactDetModule { }