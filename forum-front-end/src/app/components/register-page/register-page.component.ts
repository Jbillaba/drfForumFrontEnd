import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForumapiService } from '../../services/forumapi.service';
import { CommonModule } from '@angular/common';
import { MustMatch } from '../../_helpers';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  users:any;
  constructor(private forumApiService: ForumapiService) {}
  passMinLength: number = 8;

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    username: new FormControl('', Validators.required),
    name: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(this.passMinLength)]),
    password2: new FormControl('',[Validators.required, Validators.minLength(this.passMinLength)]),

  }, {
    validators: MustMatch('password', 'password2')
  });

  onSubmit(){
    this.forumApiService.postRegister(this.registerForm.value).subscribe(user => this.users.push(user))
  }

  

}
