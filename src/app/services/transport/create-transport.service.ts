import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateTransportService {
  file!: any
  constructor(private http:HttpClient) { }
  
  createTransport(formValue:any, file: any): Observable<any> {
    const formData = new FormData()

    formData.append('name', formValue.name)
    formData.append('description', formValue.name)
    formData.append('image', file)
    formData.append('transport_type', formValue.transport_type)
    formData.append('owner', formValue.owner)

  return this.http.post('http://109.123.254.230:8888/transport/create', formData)
}
}
