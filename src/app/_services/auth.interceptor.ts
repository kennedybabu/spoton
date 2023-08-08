// import { AuthInterceptor } from './auth.interceptor';


// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from '../auth/auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   constructor(private authService:AuthService) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> { 
//     let access_token = localStorage.getItem('access')
//     if(access_token) {
//       const modifiedReq = request.clone({
//         setHeaders: {
//           Authorization: access_token
//         }
//       })
//       return next.handle(modifiedReq)
//     }
//     return next.handle(request);
//   }
// }


import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      const token = localStorage.getItem('access')
      if (token) {
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
      }

    return next.handle(request);
  }
}