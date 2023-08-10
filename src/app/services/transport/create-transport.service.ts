import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateTransportService {
  file!: any
  constructor(private http:HttpClient) { }
  
  createTransport(formValue:any, costs: any): Observable<any> {
    const formData = new FormData()

    console.log(costs, '====')

    let jsonObject = {
      cost: costs,
      name: formValue.name,
      description: formValue.description,
      transport_type: formValue.transport_type,
      owner: formValue.owner
    }

    formData.append('name', formValue.name)
    formData.append('description', formValue.name)
    formData.append('cost', costs)
    formData.append('transport_type', formValue.transport_type)
    formData.append('owner', '1')

    console.log(jsonObject)

  return this.http.post('http://109.123.254.230:8888/transport/create', jsonObject)
}
}
