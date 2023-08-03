import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/auth/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private router:Router,
    private signupService:SignupService){}


  createUser = new FormGroup({
    password: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', Validators.required),
  })


  redirect(){
    this.router.navigate(['login'])
  }


  onSumbit(){
    this.signupService.signup(this.createUser.value).subscribe((res) => {
      console.log(res)
    })
  }

}
