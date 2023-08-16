import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddHotelAmenityService } from 'src/app/services/hotel/add-hotel-amenity.service';
import { NotificationService } from 'src/app/services/shared/notification.service';

@Component({
  selector: 'app-create-hotel-amenity',
  templateUrl: './create-hotel-amenity.component.html',
  styleUrls: ['./create-hotel-amenity.component.scss']
})
export class CreateHotelAmenityComponent {

  constructor(private addHotelAmenityService: AddHotelAmenityService,
    private notificationService:NotificationService,
    public dialogRef: MatDialogRef<CreateHotelAmenityComponent>) {}

  amenityForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })

  onSubmit(){
    this.addHotelAmenityService.addAmenity(this.amenityForm.value).subscribe((res) => {
      console.log(res)
      if(res === 'Hotel amenity created successfully') {
        this.dialogRef.close()
        this.notificationService.sendSuccessNotification('amenity created')
      } else {
        this.notificationService.sendErrorNotification('something went wrong, try again')
      }
    })
  }

}
