import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateRoomTypeService {

  constructor(private http:HttpClient) { }

  createType(formvalue: any, hotelId: number): Observable<any> {
    let jsonObject = {
      name: formvalue.name,
      description: formvalue.description,
      tariff: +formvalue.tariff,
      hotel: hotelId
    }
    
    return this.http.post('http://109.123.254.230:8888/hotels/createroomtype', jsonObject)
  }
}
