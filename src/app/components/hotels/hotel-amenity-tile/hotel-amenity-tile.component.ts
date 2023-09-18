import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-amenity-tile',
  templateUrl: './hotel-amenity-tile.component.html',
  styleUrls: ['./hotel-amenity-tile.component.scss']
})
export class HotelAmenityTileComponent {

  object!: any

  @Input() amenity!: any 
  @Input() i!: any


  constructor(){
    this.object = this.amenity 

    console.log(this.object)
  }



}
