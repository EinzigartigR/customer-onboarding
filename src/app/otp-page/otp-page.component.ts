import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../common/services/login.service';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.scss']
})

export class OtpPageComponent implements OnInit {
  otpForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {
    this.otpForm = this.formBuilder.group({
      digit1: ["", Validators.compose([Validators.required])],
      digit2: ["", Validators.compose([Validators.required])],
      digit3: ["", Validators.compose([Validators.required])],
      digit4: ["", Validators.compose([Validators.required])]
    });
  }
  ngOnInit() {

  }

  onDigitInput(event: any, digitNumber: number) {
    const nextDigitField = event.target.nextElementSibling;
    if (event.target.value) {
      if (nextDigitField) {
        nextDigitField.focus();
      } else {
        this.onSubmit();
      }
    } else if (event.key === 'Backspace') {
      const previousDigitField = event.target.previousElementSibling;
      if (previousDigitField) {
        previousDigitField.focus();
      }
    }
  }
  onSubmit() {
    const payload = {
      otp: this.otpForm.value.digit1 + this.otpForm.value.digit2 + this.otpForm.value.digit3 + this.otpForm.value.digit4,
    }
    this.loginService.validateOTP(payload).subscribe((res) => {
      this.router.navigate(['/contact-det']);
    }, (err) => {
      console.log(err)
    })
  }

}

