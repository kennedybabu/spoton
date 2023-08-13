import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";



@Injectable({
  providedIn: 'root'
})
export class UploadHotelImageService {

  userId!: any

  constructor(private http: HttpClient) { 
     const token = localStorage.getItem('access') || ''

      this.userId = jwt_decode(token)

  }


  uploadImage(formvalue: any, file: any, hotel: any) {
    
    

    const formData = new FormData()

    formData.append('name', formvalue.name)
    formData.append('description', formvalue.description)
    formData.append('hotel', hotel)
    formData.append('owner', this.userId.user_id)
    formData.append('image', file)

    console.log(formData)

    let jsonObject = {
      name: formvalue.name,
      description: formvalue.description,
      image: file,
      hotel: hotel, 
      owner: this.userId.user_id
    }    

    return this.http.post('http://109.123.254.230:8888/hotels/create', formData)

  }
}
