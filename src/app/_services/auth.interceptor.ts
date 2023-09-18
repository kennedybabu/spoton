import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService:AuthService) {}
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

      const token = localStorage.getItem('access')
      if (token) {

        if(this.authService.isAuthTokenValid(token)) {
          let modifiedReq = request.clone({ 
            headers: request.headers.set('Authorization', 'Bearer ' + token) 
          })

          return next.handle(modifiedReq)
        }

           this.authService.generateNewTokens().pipe(
            take(1),
            switchMap((res: any) => {
              console.log(res, 'clalededads')
            let token = res.access
            let modifiedReq = request.clone({
              headers: request.headers.set('Authorization', 'Bearer ' + token)
            })

            return next.handle(modifiedReq)
          })
        )
      }

    return next.handle(request);
  }
}