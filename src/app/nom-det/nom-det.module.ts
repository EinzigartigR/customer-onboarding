import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NomDetComponent } from './nom-det.component';


const NomDetModuleRoute: Routes = [
  {
    path: '',
    component: NomDetComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(NomDetModuleRoute)
  ],
  exports: [RouterModule]
})
export class NomDetModule { }