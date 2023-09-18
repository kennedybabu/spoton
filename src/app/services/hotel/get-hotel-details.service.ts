import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetHotelDetailsService {



  constructor(private http:HttpClient) { }

  getHotelDetails(id:number): Observable<any> {    
    return this.http.get(`http://109.123.254.230:8888/hotels/get/hotel/details/${id}`)
  }

}
