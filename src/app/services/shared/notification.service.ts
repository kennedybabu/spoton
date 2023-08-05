import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private errorNotification = new Subject<string>()
  private successNotification = new Subject<string>()

  constructor() { }

  sendErrorNotification(message: string){
    this.errorNotification.next(message)
  }

  sendSuccessNotification(message: string){
    this.successNotification.next(message)
  }


  getSuccessNotification(){
    return this.successNotification.asObservable()
  }


  getErrorNotification(){
    return this.errorNotification.asObservable()
  }
}
