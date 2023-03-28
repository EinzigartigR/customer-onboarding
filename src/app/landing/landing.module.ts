
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';


const LandingModuleRoute: Routes = [
  {
    path: '',
    component: LandingComponent,
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(LandingModuleRoute)
  ],
  exports: [RouterModule]
})
export class LandingModule { }
