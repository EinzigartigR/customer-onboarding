import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uid',
  templateUrl: './uid.component.html',
  styleUrls: ['./uid.component.scss']
})


export class  UidComponent implements OnInit {
  uidForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.uidForm = this.formBuilder.group({
      doctype : ["", Validators.compose([Validators.required])],
      aadhar: ["", Validators.compose([Validators.required])],
      pan: ["", Validators.compose([Validators.required])]
    });
  }
  ngOnInit() {

  }
  onSubmit() {
    const payload = {
      doctype: this.uidForm.value.username,
      aadhar: this.uidForm.value.username,
      pan: this.uidForm.value.username
  
    }
  }

}