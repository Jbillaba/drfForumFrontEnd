import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from './storage.service';

let authToken: any; 


@Injectable({
  providedIn: 'root'
})
export class ForumapiService {
  
  private API_USERS_ENDPOINT = 'http://localhost:8000/users/'
  private API_RECENT_POSTS_ENDPOINT = 'http://localhost:8000/posts/?ordering=-created_on'
  private API_OLDEST_POSTS_ENDPOINT = 'http://localhost:8000/posts/?ordering=created_on'
  private API_GET_POSTS_ENDPOINT = 'http://localhost:8000/posts/'
  private API_REGISTER_ENDPOINT = 'http://localhost:8000/api/register/'
  private API_LOGIN_ENDPOINT = 'http://localhost:8000/api/token/'
  private API_COMMENT_ENDPOINT ='http://localhost:8000/comments/'
  private API_POST_RECENT_COMMENT_ENDPOINT ='http://localhost:8000/comments/?ordering=-created_on&search='
  private API_POST_OLDEST_COMMENT_ENDPOINT ='http://localhost:8000/comments/?ordering=created_on&search='
  private API_POST_COMMENTS_ENDPOINT = 'http://localhost:8000/comments/?search='

  constructor(private httpClient: HttpClient,
              private storageService: StorageService,
              private jwtHelper: JwtHelperService) { }
  
  
  AuthHttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": `Bearer ${this.storageService.getToken()}`})
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

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

  getRecentPosts(){
    return this.httpClient.get(this.API_RECENT_POSTS_ENDPOINT)
  }

  getOldestPosts(){
    return this.httpClient.get(this.API_OLDEST_POSTS_ENDPOINT)
  }

  getPost(postId: string ){
    return this.httpClient.get(this.API_GET_POSTS_ENDPOINT + postId + "/")
  }


  createPost(title: string, text: string) {
    return this.httpClient.post(this.API_GET_POSTS_ENDPOINT, {title, text}, this.AuthHttpOptions)
  }
  
  createComment(text: string, post: string){
    return this.httpClient.post(this.API_COMMENT_ENDPOINT, {text, post}, this.AuthHttpOptions)
  }

  getPostComments(postId:string){
    return this.httpClient.get(this.API_POST_COMMENTS_ENDPOINT + postId)
  }

  getRecentPostComments(postId:string){
    return this.httpClient.get(this.API_POST_RECENT_COMMENT_ENDPOINT + postId)
  }

  getOldestPostComments(postId:string){
    return this.httpClient.get(this.API_POST_OLDEST_COMMENT_ENDPOINT + postId)
  }

  userRegister(email: string, username: string, name: string, password: string, password2: string){
    return this.httpClient.post(this.API_REGISTER_ENDPOINT, {email, username, name, password, password2}, this.httpOptions)
  }

  logIn(username: string, password: string){
    return this.httpClient.post(this.API_LOGIN_ENDPOINT, {username, password})
  }
}