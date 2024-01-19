import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForumapiService {
  
  private API_USERS_ENDPOINT = 'http://localhost:8000/users/'
  private API_POSTS_ENDPOINT = 'http://localhost:8000/posts/'

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.API_POSTS_ENDPOINT)
  }

  getPosts(){
    return this.httpClient.get(this.API_POSTS_ENDPOINT)
  }

  login(){
    
  }

}
