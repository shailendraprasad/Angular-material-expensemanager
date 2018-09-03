import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  registrationForm: FormGroup;

  get regformArray(): AbstractControl | null { return this.registrationForm.get('regformArray'); }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      regformArray: new FormArray([
        new FormGroup({
          firstName: new FormControl('', [Validators.required]),
          lastName: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required]),
          confirmpassword: new FormControl('', [Validators.required])
        }),
        new FormGroup({
          spendLimit: new FormControl('', [Validators.required])
        })
      ])
    });

  }

  RegisterUser(form) {
    console.log(form.value.regformArray[0])
  }

}
