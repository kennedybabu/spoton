import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { CreateHotelAmenityComponent } from 'src/app/components/hotels/create-hotel-amenity/create-hotel-amenity.component';
import { CreateHotelRoomTypeComponent } from 'src/app/components/hotels/create-hotel-room-type/create-hotel-room-type.component';
import { GetAllHotelAmenitiesService } from 'src/app/services/hotel/get-all-hotel-amenities.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {


  hotelId!: number
  hotelAmenities: any [] = []
  

  constructor(private route:ActivatedRoute,
    private dialog:MatDialog,
    private getAllHotelAmenitiesService:GetAllHotelAmenitiesService){}


  ngOnInit(): void {
    
    this.route.params.subscribe(
      (params:Params) => {
        this.hotelId = +params['id']
      }
    )

    // this.getAllHotelAmenitiesService.getAmenities().subscribe((res) => {
    //   this.hotelAmenities = res
    // })
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateHotelRoomTypeComponent, {
      height:'400px', width:'450px', panelClass:'dialog', data: {
        id: this.hotelId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

    openHotelAmenityDialog() {
    const dialogRef = this.dialog.open(CreateHotelAmenityComponent, {
      height:'400px', width:'450px', panelClass:'dialog', data: {
        id: this.hotelId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
