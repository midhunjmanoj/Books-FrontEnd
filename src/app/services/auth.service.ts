import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl="http://localhost:52947/api/auth"

  constructor(private http: HttpClient) {

   }
   register(userModel:User): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`,userModel)
   }
   login(data:any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}?id=${data.email}&passwd=${data.password}`)
   }
   checkToken():boolean{
    if(localStorage.getItem('token')){
      return true
    }
    else{
      return false
    }
   }

   logout(){
    localStorage.clear();
  }
}
