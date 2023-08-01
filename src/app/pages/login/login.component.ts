import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService:LoginService,
    private router:Router
    ){}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required)
  })

  onFormSubmit(){
    this.loginService.login(this.loginForm.value)
  }

  redirect(){
    this.router.navigate(['signup'])
  }
}
