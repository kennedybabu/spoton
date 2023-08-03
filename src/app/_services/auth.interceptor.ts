import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> { 
    if(this.authService.isAuthenticated) {
      let token = this.authService.isAuthenticated
      
      let modifiedReq = request.clone({
        headers: request.headers.append('Authorization', `Bearer ${token}`)
      })
      return next.handle(modifiedReq)
    }
    return next.handle(request);
  }
}
