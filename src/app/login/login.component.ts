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
  generateOTP(payload: any) {
    this.LoginService.generateOTP(payload).subscribe((res) => {
      this.router.navigate(['/otp'])
    })
  }
  onSubmit() {
    const payload = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    this.LoginService.login(payload).subscribe((res) => {
      this.generateOTP(payload.username);
    }, (err) => {
      Swal.fire({
        toast: true,
        title: 'Your username or password is wrong',
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
        position: 'top-right',
        timerProgressBar: true
      })
    })
  }

}
