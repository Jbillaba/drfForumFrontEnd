import { Component, OnInit } from '@angular/core';
import { ForumapiService } from '../../services/forumapi.service';
import { StorageService } from '../../services/storage.service';
import { CommonModule } from '@angular/common';
import {  Router, RouterModule,  } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule,   ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
  posts: any;
  loggedIn: boolean = false;
  
  constructor(private forumApiService: ForumapiService,
              private storageService: StorageService,
              private router: Router) {}
  
  ngOnInit(): void {
    this.forumApiService.getPosts().subscribe(response => {this.posts = response })
    this.loggedIn = this.storageService.isLoggedIn()
  }

 goToSubmitPost(){
  if (!this.loggedIn){
    this.router.navigateByUrl("/login")
  }
  else this.router.navigateByUrl("/submitpost")
 }


}
