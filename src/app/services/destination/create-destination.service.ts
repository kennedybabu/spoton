import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateDestinationService {

  constructor(private http:HttpClient) { }
  fileName = ''

  createDestinantion(formValue:any, file: any): Observable<any> {

    const formData = new FormData()

    formData.append('image', file)

    formData.append('name', formValue.name)

    formData.append('description', formValue.description)

    formData.append('type', formValue.type)


    
    return this.http.post('http://109.123.254.230:8888/services/destinations/create', formData)
  }
}
