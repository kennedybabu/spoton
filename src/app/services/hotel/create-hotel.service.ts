import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";



@Injectable({
  providedIn: 'root'
})
export class CreateHotelService {

  userId!: any

  constructor(private http:HttpClient) {
      const token = localStorage.getItem('access') || ''

      this.userId = jwt_decode(token)
   }

  createHotel(formValue:any, hotelImage: any, hotelVideo: any): Observable<any> {

    const formData = new FormData()
    formData.append('name', formValue.name)
    formData.append('description', formValue.description)
    formData.append('image', hotelImage)
    formData.append('video', hotelVideo)
    formData.append('cost', formValue.cost)
    formData.append('owner', this.userId)

    return this.http.post('http://109.123.254.230:8888/hotels/create', formData)
  }
}
