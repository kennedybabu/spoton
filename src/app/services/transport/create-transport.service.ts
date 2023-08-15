import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";



@Injectable({
  providedIn: 'root'
})
export class CreateTransportService {


  file!: any
  userId!: any


  constructor(private http:HttpClient) {
    const token = localStorage.getItem('access') || ''

    this.userId = jwt_decode(token)

   }
  
  createTransport(formValue:any, costs: any): Observable<any> {
    let jsonObject = {
      cost: costs,
      name: formValue.name,
      description: formValue.description,
      transport_type: formValue.transport_type,
      owner: this.userId.user_id
    }

    // formData.append('name', formValue.name)
    // formData.append('description', formValue.name)
    // formData.append('cost', costs)
    // formData.append('transport_type', formValue.transport_type)
    // formData.append('owner', '1')

    // console.log(jsonObject)

  return this.http.post('http://109.123.254.230:8888/transport/create', jsonObject)
}
}
