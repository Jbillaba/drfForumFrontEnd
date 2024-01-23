import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForumapiService } from '../../services/forumapi.service';
import { FormControl, FormGroup, Validators,  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  constructor(private forumApiService: ForumapiService){}

  createPostForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required])
  })

  onSubmit(){
    const val = this.createPostForm.value;

    if (val.title && val.text){
      this.forumApiService.createPost(val.title, val.text).subscribe(post => (post))
    }

  }

}
