import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForumapiService } from '../../services/forumapi.service';
import { FormControl, FormGroup, Validators,  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  constructor(private forumApiService: ForumapiService,
              private router: Router){}

  createPostForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required])
  })

  onSubmit(){
    const val = this.createPostForm.value;

    if (val.title && val.text){
      this.forumApiService.createPost(val.title, val.text).subscribe(post => (post))
    }
    this.router.navigateByUrl("/")
  }
}
