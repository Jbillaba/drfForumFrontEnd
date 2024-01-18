import { Component, OnInit } from '@angular/core';
import { ForumapiService } from '../../services/forumapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
  posts: any;
  constructor(private forumApiService: ForumapiService) {}
  
  ngOnInit(): void {
    this.forumApiService.getPosts().subscribe(response => {this.posts = response })
  }

}
