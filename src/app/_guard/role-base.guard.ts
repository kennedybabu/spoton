// import { CanActivateFn } from '@angular/router';

// export const roleBaseGuard: CanActivateFn = (route, state) => {
//   return true;
// };


import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})

export class RoleBaseGuard implements CanActivate {
  constructor(private authService:AuthService,
    private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.authService.isAuthenticated) {
      this.router.navigate(['login'])
      this.authService.logout()
      return false
    }

    return true
  }
}