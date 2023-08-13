import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VideosComponent } from 'src/app/components/videos/videos.component';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {

  max = 20;
  min = 1;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;

  
  constructor(
    public dialog: MatDialog,
    private router:Router){
    }

  openDialog() {
    const dialogRef = this.dialog.open(VideosComponent, {
      width: '75%',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


  bookTour(){
    this.router.navigate(['booking'])
  }


}


