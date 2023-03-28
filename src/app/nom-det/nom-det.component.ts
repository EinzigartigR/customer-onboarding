import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nom-det',
  templateUrl: './nom-det.component.html',
  styleUrls: ['./nom-det.component.scss']
})


export class NomDetComponent implements OnInit {
  nomDetForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.nomDetForm = this.formBuilder.group({
      firstname: ["", Validators.compose([Validators.required])],
      lastname: ["", Validators.compose([Validators.required])],
      relation: ["", Validators.compose([Validators.required])],
      gender: ["", Validators.compose([Validators.required])],
      phone: ["", Validators.compose([Validators.required])],
      dob: ["", Validators.compose([Validators.required])]
    });
  }
  ngOnInit() {

  }
  onSubmit() {
    const payload = {
      firstname: this.nomDetForm.value.firstname,
      lastname: this.nomDetForm.value.lastname,
      relation: this.nomDetForm.value.relation,
      gender: this.nomDetForm.value.gender,
      phone: this.nomDetForm.value.phone,
      dob: this.nomDetForm.value.dob
  
    }
  }

}