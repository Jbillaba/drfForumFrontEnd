import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ForumapiService } from '../../services/forumapi.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule ],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.css'
})
export class LogInPageComponent {
  users: any;

  constructor(private forumApiService: ForumapiService,
              private router: Router) {}

  logInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  onSubmit(){
    const val = this.logInForm.value;

    if (val.username && val.password){
      this.forumApiService.logIn(val.username, val.password).subscribe(
        () => { 
          console.log("user logged in")
          this.router.navigateByUrl("/")
        }
      )
    }
  }

}
