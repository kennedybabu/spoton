import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  constructor(private router:Router){}

  @Output() toggleNav: EventEmitter<boolean> = new EventEmitter()

  toggle(){
    this.toggleNav.emit(true)
  }


  searchTrips(type:string) {
    this.router.navigate(['trip-search', type])
  }

}
