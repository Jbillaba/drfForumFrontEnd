import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  passMinLength: number = 8;

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    name: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(this.passMinLength)]),
    password2: new FormControl('',[Validators.required, Validators.minLength(this.passMinLength)]),

  });
  onSubmit(){
    console.warn(this.registerForm.value);
  }
}
