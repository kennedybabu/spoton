import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateDestinationPackageService {

  constructor(private http:HttpClient) { }

  createPackage(formValue:any, destinationId: any): Observable<any> {


    const formData = new FormData()

    formData.append("name", formValue.name)
    formData.append("description", formValue.description)
    formData.append("image", formValue.image)
    formData.append("video", formValue.video)
    formData.append("overview", formValue.overview)
    formData.append("company", formValue.company)
    formData.append("destination", destinationId)

    return this.http.post('http://109.123.254.230:8888/services/destinationpackage/create', formData)
  }
}
