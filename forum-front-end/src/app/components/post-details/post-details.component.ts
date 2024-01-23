import { Component } from '@angular/core';
import { ForumapiService } from '../../services/forumapi.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule,  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  post: any;
  constructor(private forumApiService:ForumapiService,
              private route: ActivatedRoute){}

  ngOnInit(){
    const routeParameter = this.route.snapshot.paramMap;
    const postIdFromRoute = Number(routeParameter.get("postid"))
    const postIdToString = postIdFromRoute.toString()
    this.forumApiService.getPost(postIdToString).subscribe(response => this.post = response)
  }

}
