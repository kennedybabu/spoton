import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GetAllHotelsService } from 'src/app/services/hotel/get-all-hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit, AfterViewInit {


  hotels!: any
  hotelId!: any

  constructor(private getAllHotelsService: GetAllHotelsService,
     private router:Router, 
     private route: ActivatedRoute){}

  ngOnInit(): void {
   
    this.getAllHotelsService.getHotels().subscribe((res) => {
      this.hotels = res 

      this.dataSource.data = res
    })
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('MatSort') sort!: MatSort;

  dataSource = new MatTableDataSource<any>(this.hotels);

  displayedColumns: string[] = ['name', 'description', 'action'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  viewHotel(id: number) {
    this.router.navigate(['hotel', id])
  }

}
