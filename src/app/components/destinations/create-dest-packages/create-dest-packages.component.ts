import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateDestinationPackageService } from 'src/app/services/destination/create-destination-package.service';
import { GetAllDestinationsService } from 'src/app/services/destination/get-all-destinations.service';
import { NotificationService } from 'src/app/services/shared/notification.service';

@Component({
  selector: 'app-create-dest-packages',
  templateUrl: './create-dest-packages.component.html',
  styleUrls: ['./create-dest-packages.component.scss']
})
export class CreateDestPackagesComponent implements OnInit {

  destinationId!: number
  destinations: any [] = []

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private createDestinationPackageService:CreateDestinationPackageService,
  private notificationService:NotificationService,
  private getAllDestinationsService: GetAllDestinationsService,
  public dialogRef: MatDialogRef<CreateDestPackagesComponent>){
  
    this.destinationId = data.destinationId 

    console.log(this.destinationId)
  }

  destinationPackageForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    video: new FormControl('', Validators.required),
    overview: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required)
  })



  ngOnInit(): void {
    this.getAllDestinationsService.getDestinations().subscribe((res) => {
      this.destinations = res
    })
  }


  destinationPackageSubmit(){
    this.createDestinationPackageService.createPackage(this.destinationPackageForm.value, this.destinationId).subscribe((res) => {
      if(res === 'Destination Package created successfully') {
        this.destinationPackageForm.reset()
        this.dialogRef.close()
        this.notificationService.sendSuccessNotification('destination package created')
      } else {
        this.notificationService.sendErrorNotification('seomthing went wrong, try again')
      }
    })
  } 


}
