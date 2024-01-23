import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ForumapiService {
  
  private API_USERS_ENDPOINT = 'http://localhost:8000/users/'
  private API_POSTS_ENDPOINT = 'http://localhost:8000/posts/'
  private API_REGISTER_ENDPOINT = 'http://localhost:8000/api/register/'
  private API_LOGIN_ENDPOINT = 'http://localhost:8000/api/token/'
  private API_LOGOUT_ENDPOINT ='http://localhost:8000/api/logout'

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.API_USERS_ENDPOINT)
  }

  getUser(){
    return this.httpClient.get(this.API_USERS_ENDPOINT + "/<id>/")
  }

  getPosts(){
    return this.httpClient.get(this.API_POSTS_ENDPOINT)
  }

  getPost(postId: string ){
    return this.httpClient.get(this.API_POSTS_ENDPOINT + postId + "/")
  }

  userRegister(email: string, username: string, name: string, password: string, password2: string){
    return this.httpClient.post(this.API_REGISTER_ENDPOINT, {email, username, name, password, password2}, httpOptions)
  }

  logIn(username: string, password: string){
    return this.httpClient.post(this.API_LOGIN_ENDPOINT, {username, password}, httpOptions)
  }

  //find a way to implement a log out function 

}