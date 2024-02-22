import { Component } from '@angular/core';
import { ForumapiService } from '../../services/forumapi.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  post: any;
  postComments: any;
  
  constructor(private forumApiService:ForumapiService,
              private route: ActivatedRoute){}
  createCommentForm = new FormGroup({
    text: new FormControl('', [Validators.required])
  })

  ngOnInit(){
    const routeParameter = this.route.snapshot.paramMap;
    const postIdFromRoute = Number(routeParameter.get("postid"))
    const postIdToString = postIdFromRoute.toString()
    this.forumApiService.getPost(postIdToString).subscribe(response => this.post = response)
    this.forumApiService.getPostComments(postIdToString).subscribe(response => this.postComments = response)
  }

  onSubmitComment(){
    const val = this.createCommentForm.value;
    const postUrl = this.post.url;
    if (val.text){
      this.forumApiService.createComment(val.text, postUrl).subscribe(comment => (comment))
    }
  }

}
