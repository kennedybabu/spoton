import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spoton';
  opened: boolean = false

  onToggle(event:any){
    this.opened = !this.opened
  }
}
