import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSlider } from '@angular/material/slider';
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

  
  constructor(public dialog: MatDialog){}

  openDialog() {
    const dialogRef = this.dialog.open(VideosComponent, {
      width: '640px',
      height: '360px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}


