import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { CreateHotelImagesComponent } from 'src/app/components/hotels/create-hotel-images/create-hotel-images.component';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {


  hotelId!: number
  

  constructor(private route:ActivatedRoute,
    private dialog:MatDialog){}


  ngOnInit(): void {
    
    this.route.params.subscribe(
      (params:Params) => {
        this.hotelId = +params['id']
      }
    )
    console.log(this.hotelId)
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateHotelImagesComponent, {
      height:'400px', width:'450px', panelClass:'dialog', data: {
        id: this.hotelId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
