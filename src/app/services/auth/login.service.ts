import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(formvalue:any): Observable<any>{
    let jsonObject = {
      "password": formvalue.password,
      "username": formvalue.username,  
    }
    return this.http.post('http://109.123.254.230:8888/accounts/create/user', jsonObject)
  }

}
