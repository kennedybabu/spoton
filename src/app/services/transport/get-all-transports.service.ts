import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllTransportsService {

  constructor(private http:HttpClient) { }

  getTransports(): Observable<any> {
    
    return this.http.get('http://109.123.254.230:8888/services/destinations/all')
  }
}
