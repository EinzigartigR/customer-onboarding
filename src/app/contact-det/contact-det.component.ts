import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-det',
  templateUrl: './contact-det.component.html',
  styleUrls: ['./contact-det.component.scss']
})

export class ContactDetComponent implements OnInit {
  contactDetForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.contactDetForm = this.formBuilder.group({
      street : ["", Validators.compose([Validators.required])],
      state: ["", Validators.compose([Validators.required])],
      city: ["", Validators.compose([Validators.required])],
      code: ["", Validators.compose([Validators.required])],
      phone: ["", Validators.compose([Validators.required])]
    });
  }
  ngOnInit() {

  }
  onSubmit() {
    const payload = {
      street: this.contactDetForm.value.street,
      state: this.contactDetForm.value.state,
      city: this.contactDetForm.value.city,
      code: this.contactDetForm.value.code,
      phone: this.contactDetForm.value.phone
  
    }
  }

}