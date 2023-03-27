import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['',Validators.required]
    });
  }
  ngOnInit() {

  }

  onSubmit() {
    const payload = {
      username: this.signupForm.value.username,
      email: this.signupForm.value.username,
      phone: this.signupForm.value.username,
    }
    
  }
}
