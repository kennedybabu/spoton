import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddHotelAmenityService {

  constructor(private http:HttpClient) { }

  addAmenity(formValue:any): Observable<any> {

    let jsonObject = {
      'name': formValue.name,
      'description': formValue.description 
    } 

    return this.http.post('http://109.123.254.230:8888/hotels/create/hotel/global/amenities', jsonObject)
  }
}
