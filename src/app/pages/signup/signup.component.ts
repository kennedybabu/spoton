import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private router:Router){}


  createUser = new FormGroup({
    password: new FormControl('', Validators.required)
  })


  redirect(){
    this.router.navigate(['login'])
  }

}
