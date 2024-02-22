import { DOCUMENT } from '@angular/common';
import { Injectable, Inject} from '@angular/core';
const USER_KEY ='auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  private sessionStorage = this.document.defaultView?.sessionStorage;

  clean(): void{
    this.sessionStorage?.clear()
    location.reload();
  }

  public saveUser(user: any): void {
    location.reload();
    this.sessionStorage?.removeItem(USER_KEY);
    this.sessionStorage?.setItem(USER_KEY, JSON.stringify(user))
  }

  public getUser(): any {
    const user = this.sessionStorage?.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user)
    }
  }

  public getToken(): any {
    if (this.isLoggedIn()) {
    const token : any = this.sessionStorage?.getItem(USER_KEY)
    const authToken = JSON.parse(token).access
    return authToken;
    }
    else
    return 
  }

  public isLoggedIn(): boolean {
    const user = this.sessionStorage?.getItem(USER_KEY);

    if (user) {
      return true
    }
    return false
  }

  

}
