import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { VideosComponent } from 'src/app/components/videos/videos.component';
import { GetDestPackagesService } from 'src/app/services/destination/get-dest-packages.service';
import { GetAllDestPackagesService } from 'src/app/services/package/get-all-dest-packages.service';
import { GetPackageOptionsService } from 'src/app/services/package/get-package-options.service';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  max = 20;
  min = 1;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;


  options!: any
  destPackages!: any

  
  constructor(
    public dialog: MatDialog,
    private router:Router,
    private getPackageOptionsService: GetPackageOptionsService,
    private getDestPackagesService:GetDestPackagesService,
    private getAllDestPackagesService:GetAllDestPackagesService
    ){
    }

  openDialog() {
    const dialogRef = this.dialog.open(VideosComponent, {
      width: '75%',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


  bookTour(){
    this.router.navigate(['booking'])
  }


  ngOnInit(): void {
    this.getPackageOptionsService.getPackageOptions().subscribe((res) => {
      this.options = res
    })


    this.getAllDestPackagesService.getAllDestPackages().subscribe((res) => {
      this.destPackages = res

      console.log(res)
    })

  }


}


