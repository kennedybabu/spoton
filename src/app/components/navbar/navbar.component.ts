import { GetAllPackagesService } from './../../services/package/get-all-packages.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { BookTourComponent } from '../book-tour/book-tour.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private router:Router, private dialog: MatDialog,
    private GetAllPackagesService:GetAllPackagesService){}


  packageTypes: any [] = []
  @Output() toggleNav: EventEmitter<boolean> = new EventEmitter()

  toggle(){
    this.toggleNav.emit(true)
  }


  searchTrips(type:string) {
    this.router.navigate(['trip-search', type])
  }


  ngOnInit(): void {
    this.GetAllPackagesService.getPackages().subscribe((res) => {
      this.packageTypes = res

      console.log(res)
    })
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
