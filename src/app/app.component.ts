import { Component } from '@angular/core';
import { NotificationService } from './services/shared/notification.service';
import { LoaderService } from './services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spoton';
  opened: boolean = false

  successNotification!: string
  errorNotification!: string

  

  constructor(private notificationService:NotificationService,
    public loaderService:LoaderService){
    this.notificationService.getSuccessNotification().subscribe((res) => {
      this.successNotification = res


      setTimeout(() => {
        this.clearMsg()
      }, 2500)
    })

    this.notificationService.getErrorNotification().subscribe((res) => {
      this.errorNotification = res

      setTimeout(() => {
        this.clearMsg()
      }, 2500)
    })
  }

  onToggle(event:any){
    this.opened = !this.opened
  }


  clearMsg(){
    this.successNotification =''
    this.errorNotification =''
  }
}
