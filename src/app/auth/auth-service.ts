import { Injectable, OnInit } from '@angular/core';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private token = 'auth_token';
  private _authstatus = new BehaviorSubject<boolean>(false);
  public authstatus = this._authstatus.asObservable();
  constructor(private http: HttpClient){}
  Login(Loginrequest:LoginRequest):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(environment.apiurl + "api/Login",Loginrequest)
    .pipe(tap(response=>{
      if(response.sucess){
        localStorage.setItem(this.token,response.token);
        this.setAuthStatus(true);
      }
    }));
  }

  init(){
    if(this.IsAuthenticated()){
      this.setAuthStatus(true);
    }
  }

  private setAuthStatus(isLoggedIn: boolean){
    this._authstatus.next(isLoggedIn);
  }

  Logout(){
    localStorage.removeItem(this.token);
    this.setAuthStatus(false);
  }
  IsAuthenticated():boolean{
    return this.GetToken() !=null;
  }
  GetToken():string | null{
    return localStorage.getItem(this.token);
  }
}