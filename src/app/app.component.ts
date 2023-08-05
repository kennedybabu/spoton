import { Component } from '@angular/core';
import { NotificationService } from './services/shared/notification.service';

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

  constructor(private notificationService:NotificationService){
    this.notificationService.getSuccessNotification().subscribe((res) => {
      this.successNotification = res
    })

    this.notificationService.getErrorNotification().subscribe((res) => {
      this.errorNotification = res
    })
  }

  onToggle(event:any){
    this.opened = !this.opened
  }
}
