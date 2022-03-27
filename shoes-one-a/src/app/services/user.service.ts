import { Injectable } from '@angular/core';
import { User } from '../models/usermodel';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User

  url_api= `${environment.API_URL}/user`

  constructor(private http: HttpClient, private router: Router) {
    this.selectedUser = new User
   }

   register(formUser: any){
    return this.http.post(`${this.url_api}/create-user`, formUser)
  }

  login(credentials: any){
    return this.http.post(`${this.url_api}/login`, credentials)
  }
  
  loggedIn(){
    return localStorage.getItem('token') ? true : false 
  }
  getToken(){
    return localStorage.getItem('token')
  }

  getDataFromToken() :any {
    const token = this.getToken()
    const decoded = jwtDecode(token ? token : "Error in token")
    return decoded
  }

  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  
  
}
