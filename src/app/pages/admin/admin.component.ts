import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreateDestinationPackageService } from 'src/app/services/destination/create-destination-package.service';
import { CreateDestinationService } from 'src/app/services/destination/create-destination.service';
import { CreatePackageOptionService } from 'src/app/services/package/create-package-option.service';
import { CreatePackageTypeService } from 'src/app/services/package/create-package-type.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource = new MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  file!: any

  constructor(
    private createPackageTypeService: CreatePackageTypeService,
    private createPackageOptionService:CreatePackageOptionService,
    private createDestinationService:CreateDestinationService,
    private createDestinationPackageService:CreateDestinationPackageService
  ){
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }


  onFileSelected(event: any){
    this.file = event.target.files[0]

    console.log(this.file)
  }


  //forms
  packageTypeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required) 
  })


  packageOptionForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required), 
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

  //functions 

  packageTypeSubmit(){
    this.createPackageTypeService.createPackage(this.packageTypeForm.value).subscribe((res) => {
      console.log(res)
    })
  }


  packageOptionSubmit(){
    this.createPackageOptionService.createPackageOption(this.packageOptionForm.value).subscribe((res) => {
      console.log(res)
    })
  }


  destinationSubmit(){
    this.createDestinationService.createDestinantion(this.destinationForm.value, this.file).subscribe((res) => {
      console.log(res)
    })
  }


  destinationPackageSubmit(){
    this.createDestinationPackageService.createPackage(this.destinationPackageForm.value).subscribe((res) => {
      console.log(res)
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


}

//function
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
