import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
const USER_KEY ='auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private jwtHelper: JwtHelperService) { }

  clean(): void{
    window.sessionStorage.clear()
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user))
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user)
    }
  }

  public getToken(): any {
    if (this.isLoggedIn()) {
    const token : any = window.sessionStorage.getItem(USER_KEY)
    const authToken = JSON.parse(token).access
    return authToken;
    }
    else
    return 
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);

    if (user) {
      return true
    }
    return false
  }

  

}
