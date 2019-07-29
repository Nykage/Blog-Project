import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "https://etheriaserver.herokuapp.com/api/register";
  private _loginUrl = "https://etheriaserver.herokuapp.com/api/login";

  constructor(
    private http: HttpClient,
    private _router: Router
    ) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  loggedAdmin() {
    if (!!localStorage.getItem('token') == true) {
      let jwt = localStorage.getItem('token')
      let jwtData = jwt.split('.')[1]
      let decodedJwtJsonData = window.atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      let user_id = decodedJwtData.subject
      if (user_id == "5d32403abf8a7c7594399358") {
        return true;
      }
    }
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }

  getToken() {
    return localStorage.getItem('token')
  }
}