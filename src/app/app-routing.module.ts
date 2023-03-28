import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'contact-det',
    loadChildren: () =>
      import('./contact-det/contact-det.module').then((m) => m.ContactDetModule),
  },
  {
    path: 'nom-det',
    loadChildren: () =>
      import('./nom-det/nom-det.module').then((m) => m.NomDetModule),
  },
  {
    path: 'uid',
    loadChildren: () =>
      import('./uid/uid.module').then((m) => m.UidModule),
  },
  {
    path: 'basic-det',
    loadChildren: () =>
      import('./basic-det/basic-det.module').then((m) => m.BasicDetModule),
  },
  {
    path: 'otp',
    loadChildren: () =>
      import('./otp-page/otp-page.module').then((m) => m.OtpPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
