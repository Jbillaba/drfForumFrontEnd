import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  passMinLength: number = 8;

  constructor(private forumApiService: ForumapiService,
              private router: Router) {}

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
    const val = this.registerForm.value;

    if (val.email && val.username && val.name && val.password && val.password2){
      this.forumApiService.postRegister(val.email, val.username, val.name, val.password, val.password2).subscribe(
        () => {
          console.log("user is registered")
          this.router.navigateByUrl("/login")
        }
      )
    }
  }

  

}
