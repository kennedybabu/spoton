import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllDestPackagesService {

  constructor(private http:HttpClient) { }

  getAllDestPackages(): Observable<any> {    
    return this.http.get('http://109.123.254.230:8888/services/destinationpackage/all')
  }
}
