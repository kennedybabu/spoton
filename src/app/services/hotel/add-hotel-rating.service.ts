import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";



@Injectable({
  providedIn: 'root'
})
export class AddHotelRatingService {

  userId!: number
  user!: any


  constructor(private http:HttpClient) {
    const token = localStorage.getItem('access') || ''

    this.user = jwt_decode(token)

   }


  addRating(formValue:any, hotelId: any): Observable<any> {

    let jsonObject = {
      'name': formValue.name,
      'description': formValue.description,
      'rating': +formValue.rating,
      'hotel': +hotelId,
      'user': this.user.user_id
    } 

    return this.http.post('http://109.123.254.230:8888/hotels/rate', jsonObject)
  }

}
