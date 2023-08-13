import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadHotelImageService } from 'src/app/services/hotel/upload-hotel-image.service';
import jwt_decode from "jwt-decode";



@Component({
  selector: 'app-create-hotel-images',
  templateUrl: './create-hotel-images.component.html',
  styleUrls: ['./create-hotel-images.component.scss']
})
export class CreateHotelImagesComponent implements OnInit {


  hotelImage!: any
  hotelId!: number
  userId!: any


  constructor(private uploadHotelImageService: UploadHotelImageService,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.hotelId = data.id
    }

  ngOnInit(): void {
  }

  onImageSelect(event: any) {
    this.hotelImage = event.target.files[0]
  }


  createImageForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  })


  onSubmit(){
    console.log(this.createImageForm.value)
    this.uploadHotelImageService.uploadImage(this.createImageForm.value, this.hotelImage, this.hotelId).subscribe((res) => {
      console.log(res)
    })
  }
}
