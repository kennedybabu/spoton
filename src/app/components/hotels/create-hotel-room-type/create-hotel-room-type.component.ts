import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateRoomTypeService } from 'src/app/services/hotel/create-room-type.service';

@Component({
  selector: 'app-create-hotel-room-type',
  templateUrl: './create-hotel-room-type.component.html',
  styleUrls: ['./create-hotel-room-type.component.scss']
})
export class CreateHotelRoomTypeComponent {


  hotelId!: number

  constructor(private createRoomTypeService: CreateRoomTypeService,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.hotelId = data.id
    }


  roomTypeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    tariff: new FormControl('', Validators.required)
  })


  onSubmit(){
    this.createRoomTypeService.createType(this.roomTypeForm.value,this.hotelId).subscribe((res) => {
      console.log(res)
    })
  }

}
