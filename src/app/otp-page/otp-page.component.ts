import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.scss']
})

export class OtpPageComponent implements OnInit {
  otpForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.otpForm = this.formBuilder.group({
      digit1: ["", Validators.compose([Validators.required])],
      digit2: ["", Validators.compose([Validators.required])],
      digit3: ["", Validators.compose([Validators.required])],
      digit4: ["", Validators.compose([Validators.required])],
      digit5: ["", Validators.compose([Validators.required])],
      digit6: ["", Validators.compose([Validators.required])]
    });
  }
  ngOnInit() {

  }
  onSubmit() {
    const payload = {
      digit1: this.otpForm.value.username,
      digit2: this.otpForm.value.username,
      digit3: this.otpForm.value.username,
      digit4: this.otpForm.value.username,
      digit5: this.otpForm.value.username,
      digit6: this.otpForm.value.username
    }
  }

}

