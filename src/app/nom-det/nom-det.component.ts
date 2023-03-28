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
      doctype : ["", Validators.compose([Validators.required])],
      aadhar: ["", Validators.compose([Validators.required])],
      pan: ["", Validators.compose([Validators.required])]
    });
  }
  ngOnInit() {

  }
  onSubmit() {
    const payload = {
      doctype: this.nomDetForm.value.username,
      aadhar: this.nomDetForm.value.username,
      pan: this.nomDetForm.value.username
  
    }
  }

}