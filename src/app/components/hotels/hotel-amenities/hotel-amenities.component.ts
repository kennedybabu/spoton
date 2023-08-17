import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GetAllHotelAmenitiesService } from 'src/app/services/hotel/get-all-hotel-amenities.service';

@Component({
  selector: 'app-hotel-amenities',
  templateUrl: './hotel-amenities.component.html',
  styleUrls: ['./hotel-amenities.component.scss']
})
export class HotelAmenitiesComponent implements AfterViewInit, OnInit {



  hotelAmenities: any [] = []

  constructor(private getAllHotelAmenitiesService: GetAllHotelAmenitiesService){}

  displayedColumns: string[] = ['name', 'description'];
  dataSource = new MatTableDataSource<any>();

  displayedPackagesColumns: string [] = ['name', 'description']
  packagesDataSource = new MatTableDataSource<any>();


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('MatSort') sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngOnInit(): void {
    this.getAllHotelAmenitiesService.getAmenities().subscribe((res) => {
      if(res) {
        this.hotelAmenities = res 

        this.dataSource.data = res
      }
    })
  }

}
