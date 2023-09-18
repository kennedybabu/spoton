import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { CreateDestPackagesComponent } from 'src/app/components/destinations/create-dest-packages/create-dest-packages.component';
import { CreatePackageOptionComponent } from 'src/app/components/package/create-package-option/create-package-option.component';
import { GetDestDeatailsService } from 'src/app/services/destination/get-dest-deatails.service';
import { GetDestPackagesService } from 'src/app/services/destination/get-dest-packages.service';
import { GetAllHotelsService } from 'src/app/services/hotel/get-all-hotels.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  destinationId!: number
  destinationPackages!: any
  hotels!: any
  destination!: any


  constructor(private dialog: MatDialog, private route:ActivatedRoute,
    private getDestPackagesService:GetDestPackagesService,
    private getAllHotelsService:GetAllHotelsService,
    private getDestDeatailsService:GetDestDeatailsService){

  }



  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        this.destinationId = +params['id']
      }
    )

    this.getDestPackagesService.getDestinationPackages(this.destinationId).subscribe((res) => {
      this.destinationPackages = res

      console.log(res)
    })


    this.getAllHotelsService.getHotels().subscribe((res) => {
      this.hotels = res
    })

    this.getDestDeatailsService.getDestinationDetails(this.destinationId).subscribe((res) => {
      this.destination = res
    })

  }


  
  openHotelAmenityDialog() {
    const dialogRef = this.dialog.open(CreateDestPackagesComponent, {
     width:'650px', panelClass:'dialog', data:{
      destinationId: this.destinationId,
      hotels: this.hotels
     }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


    
  openPackageOptionDialog() {
    const dialogRef = this.dialog.open(CreatePackageOptionComponent, {
     width:'650px', panelClass:'dialog', data:{
      destinationId: this.destinationId
     }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
