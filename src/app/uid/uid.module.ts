import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UidComponent } from './uid.component';


const UidModuleRoute: Routes = [
  {
    path: '',
    component: UidComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(UidModuleRoute)
  ],
  exports: [RouterModule]
})
export class UidModule { }