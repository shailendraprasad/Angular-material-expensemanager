import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../UserModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  registrationForm: FormGroup;

  get regformArray(): AbstractControl | null { return this.registrationForm.get('regformArray'); }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      regformArray: new FormArray([
        new FormGroup({
          firstName: new FormControl('', [Validators.required]),
          lastName: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [Validators.required, Validators.minLength(8)]),
          confirmpassword: new FormControl('', [Validators.required])
        }),
        new FormGroup({
          spendLimit: new FormControl('', [Validators.required])
        })
      ])
    });

  }

  RegisterUser(form) {
    var user = new User();
    user.email = form.value.regformArray[0].email;
    user.password = form.value.regformArray[0].password;
    user.FirstName = form.value.regformArray[0].firstName;
    user.LastName = form.value.regformArray[0].lastName;
    user.SpendLimit = form.value.regformArray[1].spendLimit;


    this.userService.registerUser(user).subscribe(res => {
      console.log(res)
    });

  }

}
