import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GetAllDestinationsService } from 'src/app/services/destination/get-all-destinations.service';
import { CreateDestPackagesComponent } from '../create-dest-packages/create-dest-packages.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements AfterViewInit, OnInit {


  constructor(private getAllDestinationsService:GetAllDestinationsService,
    private dialog:MatDialog,
    private route:ActivatedRoute,
    private router:Router){}

  destinations: any [] = []
  destinationId!: number
  // @Input() destinations: any [] = []

  ngOnInit(): void {
    this.getAllDestinationsService.getDestinations().subscribe((res) => {
      this.destinations = res
      console.log(this.destinations)

      this.dataSource.data = res
    })

    
    this.route.params.subscribe(
      (params:Params) => {
        this.destinationId = +params['id']
      }
    )

    console.log('id', this.destinationId)

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


  viewDestination(id: number){
    this.router.navigate(['destination', id])
  }

    handleImageError(event: any) {
      event.target.src = '../../../assets/images/beach.jpeg';
      // Provide a fallback image URL
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(CreateDestPackagesComponent, {
      width: '80%', height:'90%', data: {
        destinationId :id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
