import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OtpPageComponent } from './otp-page.component';


const OtpPageModuleRoute: Routes = [
  {
    path: '',
    component: OtpPageComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(OtpPageModuleRoute)
  ],
  exports: [RouterModule]
})
export class OtpPageModule { }
