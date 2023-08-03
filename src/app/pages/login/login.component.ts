import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService:LoginService,
    private authService:AuthService,
    private router:Router
    ){}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required)
  })

  onFormSubmit(){
    // this.loginService.login(this.loginForm.value).subscribe((res) => {
    //   console.log(res)
    // })

    this.authService.login(this.loginForm.value).subscribe((res:any) => {
      console.log(res)
    }, (err) => {
      console.log(err)
    })
  }

  redirect(){
    this.router.navigate(['signup'])
  }
}
