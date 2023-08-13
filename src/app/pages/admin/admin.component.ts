import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreateDestinationPackageService } from 'src/app/services/destination/create-destination-package.service';
import { CreateDestinationService } from 'src/app/services/destination/create-destination.service';
import { GetAllDestinationsService } from 'src/app/services/destination/get-all-destinations.service';
import { CreatePackageOptionService } from 'src/app/services/package/create-package-option.service';
import { CreatePackageTypeService } from 'src/app/services/package/create-package-type.service';
import { GetAllPackagesService } from 'src/app/services/package/get-all-packages.service';
import { NotificationService } from 'src/app/services/shared/notification.service';
import { CreateTransportService } from 'src/app/services/transport/create-transport.service';
import { CreateCostComponent } from 'src/app/components/transport/create-cost/create-cost.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateHotelService } from 'src/app/services/hotel/create-hotel.service';
import { GetAllHotelsService } from 'src/app/services/hotel/get-all-hotels.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

export interface Transport {
  cost: Cost[];
  name: string;
  description: string;
  transport_type: string;
  owner: number;
}

export interface Cost {
  name: string;
  description: string;
  cost: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['name', 'description', 'img'];
  dataSource = new MatTableDataSource<any>();

  displayedPackagesColumns: string [] = ['name', 'description']
  packagesDataSource = new MatTableDataSource<any>();


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('MatSort') sort!: MatSort;

  file!: any
  transportFile!: any
  destinations: any
  packageTypes: any [] = []
  transportCosts: any [] = []

  //hotel variables
  hotelImage!: any 
  hotelVideo!: any

  constructor(
    private createPackageTypeService: CreatePackageTypeService,
    private createPackageOptionService:CreatePackageOptionService,
    private createDestinationService:CreateDestinationService,
    private createDestinationPackageService:CreateDestinationPackageService,
    private getAllDestinationsService: GetAllDestinationsService,
    private notificationService:NotificationService,
    private getAllPackagesService: GetAllPackagesService,
    private createTransportService: CreateTransportService,
    private dialog:MatDialog,
    private createHotelService:CreateHotelService,
    private getAllHotelsService: GetAllHotelsService){

  }


  ngOnInit(): void {
    this.getAllDestinationsService.getDestinations().subscribe((res) => {
      this.destinations = res
      console.log(this.destinations)

      this.dataSource.data = res
    })


    this.getAllPackagesService.getPackages().subscribe((res) => {
      this.packageTypes = res

      this.packagesDataSource.data = res
    })


    this.getAllHotelsService.getHotels().subscribe((res) => {
      console.log(res, 'hotels recieved')
    })

  }


  onFileSelected(event: any){
    this.file = event.target.files[0]
  }


  onImageSelect(event: any){
    this.transportFile = event.target.files[0]
  }


  onHotelImageSelect(event: any) {
    this.hotelImage = event.target.files[0]
  }

  onHotelVideoSelect(event: any) {
    this.hotelVideo = event.target.files[0]
  }


  //forms
  packageTypeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required) 
  })


  packageOptionForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required), 
    max_occupants: new FormControl('', Validators.required),
    package: new FormControl('', Validators.required),
    transport: new FormControl('', Validators.required), 
    hotel: new FormControl('', Validators.required)

  })


  destinationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  })


  destinationPackageForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    video: new FormControl('', Validators.required),
    overview: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    packageType: new FormControl('', Validators.required)
  })


  transportForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    cost: new FormControl([], Validators.required),
    transport_type: new FormControl('', Validators.required),
    owner: new FormControl('', Validators.required)
  })


  hotelForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      video: new FormControl('',Validators.required),
      cost: new FormControl('', Validators.required),
      owner: new FormControl('', Validators.required),
      ward: new FormControl('',Validators.required)
  })

  //functions 

  packageTypeSubmit(){
    this.createPackageTypeService.createPackage(this.packageTypeForm.value).subscribe((res) => {
      if(res) {
        this.notificationService.sendSuccessNotification('package created')
        this.packageTypeForm.reset()
      }
    })
  }


  packageOptionSubmit(){
    this.createPackageOptionService.createPackageOption(this.packageOptionForm.value).subscribe((res) => {
      console.log(res)
    })
  }


  destinationSubmit(){
    this.createDestinationService.createDestinantion(this.destinationForm.value, this.file).subscribe((res) => {
      if(res) {
        this.getAllDestinationsService.getDestinations().subscribe((res) => {
          this.destinations = res
          console.log(this.destinations)
    
          this.dataSource.data = res
        })

        this.notificationService.sendSuccessNotification('destination added successfully')
      }
    })
  }


  destinationPackageSubmit(){
    this.createDestinationPackageService.createPackage(this.destinationPackageForm.value).subscribe((res) => {
      console.log(res)
    })
  }


  transportFormSubmit(){
    this.createTransportService.createTransport(this.transportForm.value, this.transportCosts).subscribe((res) => {
      if(res) {
        this.notificationService.sendSuccessNotification('transport created')
        this.transportForm.reset()
      }
    })
  }


  hotelFormSubmit(){
    this.createHotelService.createHotel(this.hotelForm.value, this.hotelImage, this.hotelVideo).subscribe((res) => {
      if(res) {
        this.notificationService.sendSuccessNotification('hotel created')
        this.hotelForm.reset()
      } else {
        this.notificationService.sendErrorNotification('something went wrong, try again')
      }
    })
  }



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


  openDialog() {
     const dialogRef = this.dialog.open(CreateCostComponent, {
      width: '60%',     
     })
     
     dialogRef.afterClosed().subscribe(result => {
      if(result) {
        result.cost = parseInt(result.cost, 10) || 0
        this.transportCosts.push(result)
      }
      console.log(this.transportCosts)

     })
  }

}
