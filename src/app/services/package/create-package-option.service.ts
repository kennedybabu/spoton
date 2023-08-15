import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatePackageOptionService {

  constructor(private http:HttpClient) { }

  createPackageOption(formValue:any): Observable<any> {

    let jsonObject = {
      "requestObject": {
          "name": formValue.name,
          "description": formValue.description,
          "max_occupants": formValue.max_occupants,
          "transport": +formValue.transport,
          "hotel": +formValue.hotel,
          "package": +formValue.type,

        },
     
    }
    return this.http.post('http://109.123.254.230:8888/services/packageoption/create', jsonObject)
  }
}
