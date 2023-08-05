import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatePackageTypeService {

  constructor(private http:HttpClient) { }

  createPackage(formValue:any): Observable<any> {

    let jsonObject = {
      "requestObject": {
          "name": formValue.name,
          "description": formValue.description,
          "type": formValue.type
        },
     
    }
    return this.http.post('http://109.123.254.230:8888/services/packagetype/create', jsonObject)
  }
}
