import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumapiService {
  
  private API_USERS_ENDPOINT = 'http://localhost:8000/users/'
  private API_POSTS_ENDPOINT = 'http://localhost:8000/posts/'
  private API_REGISTER_ENDPOINT = 'http://localhost:8000/api/register/'

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.API_POSTS_ENDPOINT)
  }

  getPosts(){
    return this.httpClient.get(this.API_POSTS_ENDPOINT)
  }

  postRegister(user: any){
    return this.httpClient.post(this.API_REGISTER_ENDPOINT, user)
  }

}
