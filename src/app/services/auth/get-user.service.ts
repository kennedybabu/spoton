import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http:HttpClient) { }

  getUser(): Observable<any> {    
    return this.http.get('http://109.123.254.230:8888/accounts/get/user')
  }
}
