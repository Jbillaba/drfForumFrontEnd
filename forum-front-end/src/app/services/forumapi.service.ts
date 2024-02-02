import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

let authToken: any; 


@Injectable({
  providedIn: 'root'
})
export class ForumapiService {
  
  private API_USERS_ENDPOINT = 'http://localhost:8000/users/'
  private API_POSTS_ENDPOINT = 'http://localhost:8000/posts/?ordering=-created_on'
  private API_REGISTER_ENDPOINT = 'http://localhost:8000/api/register/'
  private API_LOGIN_ENDPOINT = 'http://localhost:8000/api/token/'

  constructor(private httpClient: HttpClient,
              private storageService: StorageService,
              private jwtHelper: JwtHelperService) { }
  
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": `Bearer ${this.storageService.getToken()}`})
};

  getUsers(){
    return this.httpClient.get(this.API_USERS_ENDPOINT)
  }

  getUser(userId: string){
    return this.httpClient.get(this.API_USERS_ENDPOINT + userId + "/")
  }

  getCurrUser(){
    authToken = JSON.parse(this.storageService.getToken()).access;
   const decodedToken = this.jwtHelper.decodeToken(authToken)
   return decodedToken
  }

  getPosts(){
    return this.httpClient.get(this.API_POSTS_ENDPOINT)
  }

  getPost(postId: string ){
    return this.httpClient.get(this.API_POSTS_ENDPOINT + postId + "/")
  }

  createPost(title: string, text: string) {
    console.log(this.httpOptions)
    return this.httpClient.post(this.API_POSTS_ENDPOINT, {title, text}, this.httpOptions)
  }

  userRegister(email: string, username: string, name: string, password: string, password2: string){
    return this.httpClient.post(this.API_REGISTER_ENDPOINT, {email, username, name, password, password2}, this.httpOptions)
  }

  logIn(username: string, password: string){
    return this.httpClient.post(this.API_LOGIN_ENDPOINT, {username, password})
  }

  //find a way to implement a log out function 

}