import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(formvalue:any){
    console.log(formvalue)
  }
}
