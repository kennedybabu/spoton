import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { BookTourComponent } from '../book-tour/book-tour.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  constructor(private router:Router, private dialog: MatDialog){}

  @Output() toggleNav: EventEmitter<boolean> = new EventEmitter()

  toggle(){
    this.toggleNav.emit(true)
  }


  searchTrips(type:string) {
    this.router.navigate(['trip-search', type])
  }



  openDialog() {
    const dialogRef = this.dialog.open(BookTourComponent, {
      height: '80%',
      width: '75%'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
