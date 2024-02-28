import { Component, Inject } from '@angular/core';
import { ForumapiService } from '../../services/forumapi.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
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
              private route: ActivatedRoute,
              @Inject(DOCUMENT) private document: Document){}
  private selectMenu = this.document.querySelector('select');
  createCommentForm = new FormGroup({
    text: new FormControl('', [Validators.required])
  })

  ngOnInit(){
    const routeParameter = this.route.snapshot.paramMap;
    const postIdFromRoute = Number(routeParameter.get("postid"))
    const postIdToString = postIdFromRoute.toString()
    this.forumApiService.getPost(postIdToString).subscribe(response => this.post = response)
    this.forumApiService.getRecentPostComments(postIdToString).subscribe(response => this.postComments = response)
    this.renderCommentOrder(postIdToString)
  }

  onSubmitComment(){
    const val = this.createCommentForm.value;
    const postUrl = this.post.url;
    if (val.text){
      this.forumApiService.createComment(val.text, postUrl).subscribe(comment => (comment))
      location.reload();
    }
  }

  renderCommentOrder(postId: string){
    this.selectMenu?.addEventListener('change', () => {
      const selectMenuValue = this.selectMenu?.value;
      switch(selectMenuValue) {
        case "Recent" : {
          return this.forumApiService.getRecentPostComments(postId).subscribe(response => {this.postComments = response})
          break;
        }
        case "Oldest" : {
          return this.forumApiService.getOldestPostComments(postId).subscribe(response => {this.postComments = response})
          break;
        }
        default: {
          return this.forumApiService.getRecentPostComments(postId).subscribe(response => {this.postComments = response})
        }
      }
    })
  }

}
