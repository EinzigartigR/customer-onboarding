import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../common/services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private LoginService: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {

  }

  onSubmit() {
    const payload = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    console.log(payload);
    this.LoginService.login(payload)
      .subscribe(
        result => {
          Swal.fire({
            toast: true,
            title: 'You have logged in successfully',
            icon: 'success',
            showConfirmButton: false,
            timer: 3000,
            position: 'top-right',
            timerProgressBar: true
          }).then(() => this.router.navigate(['/otp']))
        },

        error => {
          Swal.fire({
            toast: true,
            title: 'Your username or password is wrong',
            icon: 'error',
            showConfirmButton: false,
            timer: 3000,
            position: 'top-right',
            timerProgressBar: true
          })
        },
        () => {
          // 'onCompleted' callback.
          // No errors, route to new page here
        }
      );
  }
}
