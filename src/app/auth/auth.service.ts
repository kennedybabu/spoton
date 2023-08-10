import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  ACCESS_TOKEN = 'access'
  REFRESH_TOKEN = 'refresh_token'

  private userDataSubject: BehaviorSubject<any> = new BehaviorSubject(null)
  userData$: Observable<any> = this.userDataSubject.asObservable()

  constructor(private http:HttpClient) { 
    if(localStorage.getItem(this.ACCESS_TOKEN) && localStorage.getItem(this.REFRESH_TOKEN)) {
      const access_token = (<string>localStorage.getItem(this.ACCESS_TOKEN))
      const refresh_token = (<string>localStorage.getItem(this.REFRESH_TOKEN))
      this.userDataSubject.next({access_token, refresh_token})      
    }
  }

  get userData() {
    return this.userDataSubject.value
  }


  login(formvalue: any): Observable<any> {
    let jsonObject = {
      "password": formvalue.password,
      "username": formvalue.username,  
    }
    return this.http.post('http://109.123.254.230:8888/accounts/token/', jsonObject).pipe(
      map((res: any) => {
        const access_token = res.access
        const refresh_token = res.refresh
        this.userDataSubject.next({ access_token, refresh_token})
        localStorage.setItem(this.ACCESS_TOKEN, access_token)
        localStorage.setItem(this.REFRESH_TOKEN, refresh_token)
        return res
      })
    )
  }


  logout(){
    localStorage.removeItem(this.ACCESS_TOKEN)
    localStorage.removeItem(this.REFRESH_TOKEN)
    this.userDataSubject.next(null)
  }


  get isAuthenticated(): boolean {
    const access_token = this.userDataSubject.value?.refresh_token 
    if(!access_token){
      return false
    }
    return access_token
  }


  isAuthTokenValid(token: string){
    const decoded: any = jwt_decode(token)

    const expMilSecond: number = decoded?.exp * 1000  
    const currentTime = Date.now()
    if(expMilSecond < currentTime) {
      return false
    } 
    return true
  }


  generateNewTokens(): Observable<HttpEvent<any>> {
    const refresh_token = localStorage.getItem('refresh_token')

    return this.http.post('http://109.123.254.230:8888/accounts/token/refresh/', {
      "refresh": refresh_token
    }).pipe(
      map((res: any) => {
        const access_token = res.access 
        const refresh_token = res.refresh
        this.userDataSubject.next({ access_token, refresh_token})
        localStorage.setItem(this.ACCESS_TOKEN, access_token)
        localStorage.setItem(this.REFRESH_TOKEN, refresh_token)
        return res
      })
    )
  }
  
}
