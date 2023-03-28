import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // import FormsModule and ReactiveFormsModule
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { UpPhotoComponent } from './up-photo/up-photo.component';
import { BasicDetComponent } from './basic-det/basic-det.component';
import { ContactDetComponent } from './contact-det/contact-det.component';
import { UidComponent } from './uid/uid.component';
import { NomDetComponent } from './nom-det/nom-det.component';
import { LoaderService } from './common/loader/loader.service';
import { LoaderInterceptor } from './common/interceptors/loader.interceptor';
import { LoaderComponent } from './common/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    OtpPageComponent,
    UpPhotoComponent,
    BasicDetComponent,
    ContactDetComponent,
    UidComponent,
    NomDetComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
