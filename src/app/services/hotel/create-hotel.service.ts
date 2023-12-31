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

  createHotel(formValue:any, selectedAmenitiesIds: any): Observable<any> {

    const formData = new FormData()

    formData.append('name', formValue.name)
    formData.append('description', formValue.description)
    formData.append('cost', formValue.cost)
    formData.append('owner', this.userId.user_id)
    formData.append('amenities', selectedAmenitiesIds)


    let jsonObject = {
      'name': formValue.name,
      'description':formValue.description,
      'cost' : +formValue.cost,
      'owner': +this.userId.user_id,
      'amenities': selectedAmenitiesIds
    }

    return this.http.post('http://109.123.254.230:8888/hotels/create', jsonObject)
  }
}
