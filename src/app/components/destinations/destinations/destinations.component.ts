import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GetAllDestinationsService } from 'src/app/services/destination/get-all-destinations.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements AfterViewInit, OnInit {


  constructor(private getAllDestinationsService:GetAllDestinationsService){}

  destinations: any [] = []

  ngOnInit(): void {
    this.getAllDestinationsService.getDestinations().subscribe((res) => {
      this.destinations = res
      console.log(this.destinations)

      this.dataSource.data = res
    })
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('MatSort') sort!: MatSort;

  dataSource = new MatTableDataSource<any>(this.destinations);

  displayedColumns: string[] = ['name', 'description', 'img'];

  
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

    handleImageError(event: any) {
      event.target.src = '../../../assets/images/beach.jpeg';
      // Provide a fallback image URL
  }
}
