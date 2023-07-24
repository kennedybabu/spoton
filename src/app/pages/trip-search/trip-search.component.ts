import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.scss']
})
export class TripSearchComponent implements OnInit {

  tripLocation!: string

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:any) => {
       let string = params.type 
       this.tripLocation = string.replace(/-/g, " ")
      }
    )


    console.log(this.tripLocation)
  }


}
