import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-det',
  templateUrl: './basic-det.component.html',
  styleUrls: ['./basic-det.component.scss']
})

export class BasicDetComponent implements OnInit {
  basicDetForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.basicDetForm = this.formBuilder.group({
      firstname: ["", Validators.compose([Validators.required])],
      lastname: ["", Validators.compose([Validators.required])],
      email: ["", Validators.compose([Validators.required])],
      gender: ["", Validators.compose([Validators.required])],
      phone: ["", Validators.compose([Validators.required])],
      dob: ["", Validators.compose([Validators.required])]
      
    });
  }
  ngOnInit() {

  }
  onSubmit() {
    const payload = {
      firstname: this.basicDetForm.value.username,
      lastname: this.basicDetForm.value.username,
      email: this.basicDetForm.value.username,
      gender: this.basicDetForm.value.username,
      phone: this.basicDetForm.value.username,
      dob: this.basicDetForm.value.username
  
    }
  }

}
