import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { NotificationService } from 'src/app/services/shared/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService:AuthService,
    private router:Router,
    private notificationService: NotificationService
    ){}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required)
  })

  onFormSubmit(){
    this.authService.login(this.loginForm.value).subscribe((res:any) => {
      if(res.refresh) {
        this.notificationService.sendSuccessNotification('logged in successful')
        this.router.navigate(['/admin'])
      }
    }, (err) => {
      this.notificationService.sendErrorNotification(err.statusText)
    })
  }

  redirect(){
    this.router.navigate(['signup'])
  }
}
