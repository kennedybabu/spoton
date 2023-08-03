import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http:HttpClient) { }


  createPackage(formValue:any): Observable<any> {

    let jsonObject = {
      "requestObject": {
          "name": formValue.name,
          "description": formValue.description,
          "image": formValue.image,
          "video": formValue.video,
          "overview": formValue.overview,
          "company": formValue.company,
          "package_type": formValue.package_type
        },
     
    }
    return this.http.post('http://109.123.254.230:8888/services/destinationpackage/create', jsonObject)
  }
}
