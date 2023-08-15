import { Component, Input } from '@angular/core';
import { CreateTestimonialComponent } from '../create-testimonial/create-testimonial.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddHotelRatingService } from 'src/app/services/hotel/add-hotel-rating.service';
import jwt_decode from "jwt-decode";



@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {


  @Input() hotelId!: number

  id!: number
  // user!: any

  constructor(private dialog: MatDialog, 
    private addHotelratingService: AddHotelRatingService){
  }


  rateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required)
  })


  onSubmit(){
    this.addHotelratingService.addRating(this.rateForm.value, this.hotelId).subscribe((res) => {
      console.log(res)
    })
  }




  openDialog() {
    const dialogRef = this.dialog.open(CreateTestimonialComponent, {
      height:'400px', width:'450px', data: {
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
