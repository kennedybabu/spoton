import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  signup(formvalue:any){
    console.log(formvalue)

    let jsonObject = {
      "password": formvalue.password,
      "username": formvalue.username,
      "first_name": formvalue.first_name,
      "last_name": formvalue.last_name,
      "email":  formvalue.email,
      "phone": formvalue.phone,
      "status": "Active"
    }

    return this.http.post('http://109.123.254.230:8888/accounts/create/user', jsonObject)
  }
}
