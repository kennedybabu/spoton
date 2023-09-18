import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GetDestPackagesService } from 'src/app/services/destination/get-dest-packages.service';
import { GetAllHotelsService } from 'src/app/services/hotel/get-all-hotels.service';
import { CreatePackageOptionService } from 'src/app/services/package/create-package-option.service';
import { GetAllPackagesService } from 'src/app/services/package/get-all-packages.service';
import { NotificationService } from 'src/app/services/shared/notification.service';
import { GetAllTransportsService } from 'src/app/services/transport/get-all-transports.service';

@Component({
  selector: 'app-create-package-option',
  templateUrl: './create-package-option.component.html',
  styleUrls: ['./create-package-option.component.scss']
})
export class CreatePackageOptionComponent implements OnInit {

  hotels!: any
  allTransports!: any
  packageTypes!: any
  destinationPackages!: any
  destinationId!: any

  constructor(
    private createPackageOptionService:CreatePackageOptionService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private getAllTransportsService:GetAllTransportsService,
    private getAllPackagesService: GetAllPackagesService,
    private getAllHotelsService:GetAllHotelsService,
    public dialogRef: MatDialogRef<CreatePackageOptionComponent>,
    private notificationService: NotificationService,
    private getDestPackagesService:GetDestPackagesService

  ){
    this.destinationId = data.destinationId
  }

  packageOptionForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required), 
    max_occupants: new FormControl('', Validators.required),
    package: new FormControl('', Validators.required),
    transport: new FormControl('', Validators.required), 
    hotel: new FormControl('', Validators.required)

  })


  packageOptionSubmit(){
    this.createPackageOptionService.createPackageOption(this.packageOptionForm.value).subscribe((res) => {
      if(res === 'Destination Package Option created successfully') {
        this.dialogRef.close()
        this.notificationService.sendSuccessNotification('package option created')
      } else {
        this.notificationService.sendErrorNotification('something went wrong, try again')
      }
    })
  }


  ngOnInit(): void {
    this.getAllTransportsService.getTransports().subscribe((res) => {
      this.allTransports = res
    })


    this.getAllPackagesService.getPackages().subscribe((res) => {
      this.packageTypes = res
    })

    this.getAllHotelsService.getHotels().subscribe((res) => {
      this.hotels = res 
    })

    this.getDestPackagesService.getDestinationPackages(this.destinationId).subscribe((res) => {
      this.destinationPackages = res
    })
  }



}
