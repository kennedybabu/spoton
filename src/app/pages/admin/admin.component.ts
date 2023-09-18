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
import { GetAllTransportsService } from 'src/app/services/transport/get-all-transports.service';
import { CreateHotelAmenityComponent } from 'src/app/components/hotels/create-hotel-amenity/create-hotel-amenity.component';
import { GetAllHotelAmenitiesService } from 'src/app/services/hotel/get-all-hotel-amenities.service';
import { AddHotelAmenityService } from 'src/app/services/hotel/add-hotel-amenity.service';
import {types} from './../../package_type'
import jwtDecode from 'jwt-decode';
import { GetUserService } from 'src/app/services/auth/get-user.service';
import { Router } from '@angular/router';


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
  hotels: any [] = []
  allTransports: any = []

  //hotel variables
  hotelImage!: any 
  hotelVideo!: any
  hotelAmenities: any [] = []
  selectedAmenitiesIds: any [] = []
  date!: any
  types = types


  //current window
 showingWindow: string = 'settings' 



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
    private getAllHotelsService: GetAllHotelsService,
    private getAllTransportsService: GetAllTransportsService,
    private getAllHotelAmenitiesService:GetAllHotelAmenitiesService,
    private addHotelAmenityService:AddHotelAmenityService,
    private getUserService:GetUserService,
    private router:Router){

  }

  changeShowingWindow(string: string){
    this.showingWindow = string
  }


  ngOnInit(): void {

    this.date = new Date()

    let item = localStorage.getItem('access') || ''

    console.log(jwtDecode(item))

    this.getUserService.getUser().subscribe((res) => {
      console.log(res)
    })


    this.getAllDestinationsService.getDestinations().subscribe((res) => {
      this.destinations = res

      this.dataSource.data = res
    })


    this.getAllPackagesService.getPackages().subscribe((res) => {
      this.packageTypes = res

      console.log(res)
    })


    this.getAllHotelsService.getHotels().subscribe((res) => {
      this.hotels = res 
    })


    this.getAllTransportsService.getTransports().subscribe((res) => {
      this.allTransports = res
    })

    this.getAllHotelAmenitiesService.getAmenities().subscribe((res) => {
      this.hotelAmenities = res
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
    image: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  })


  destinationPackageForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    video: new FormControl('', Validators.required),
    overview: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required)
  })


  transportForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    cost: new FormControl([], Validators.required),
    transport_type: new FormControl('', Validators.required),
    owner: new FormControl('', Validators.required)
  })


  hotelForm = new FormGroup({
      amenities: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      owner: new FormControl('', Validators.required),
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
          this.notificationService.sendSuccessNotification('destination created')
          this.destinations = res
          console.log(this.destinations)
          this.router.navigate(['destinations'])
    
          this.dataSource.data = res
        })

        this.notificationService.sendSuccessNotification('destination added successfully')
      }
    })
  }

//not wokring, to be removed
  destinationPackageSubmit(){
    this.createDestinationPackageService.createPackage(this.destinationPackageForm.value, 1).subscribe((res) => {
      if(res === 'Destination Package created successfully') {
        this.destinationPackageForm.reset()
        this.notificationService.sendSuccessNotification('destination package created')
      } else {
        this.notificationService.sendErrorNotification('seomthing went wrong, try again')
      }
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
    this.createHotelService.createHotel(this.hotelForm.value, this.selectedAmenitiesIds).subscribe((res) => {
      if(res) {
        this.notificationService.sendSuccessNotification('hotel created')
        this.hotelForm.reset()
        this.router.navigate(['hotels'])
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
     })
  }

  openHotelAmenityDialog() {
    const dialogRef = this.dialog.open(CreateHotelAmenityComponent, {
      height:'400px', width:'450px', panelClass:'dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  amenityForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })

  onSubmit(){
    this.addHotelAmenityService.addAmenity(this.amenityForm.value).subscribe((res) => {
      console.log(res)
      if(res === 'Hotel amenity created successfully') {
        this.notificationService.sendSuccessNotification('amenity created')
      } else {
        this.notificationService.sendErrorNotification('something went wrong, try again')
      }
    })
  }

  toggleSelection(amenity: any){
    const index = this.selectedAmenitiesIds.indexOf(amenity) 

    if(index > -1) {
      this.selectedAmenitiesIds.splice(index, 1)
    } else {
      this.selectedAmenitiesIds.push(amenity)
    }

  }

}
