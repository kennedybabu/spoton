import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GetAllPackagesService } from 'src/app/services/package/get-all-packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  constructor(private getAllPackagesService:GetAllPackagesService){

  }

  displayedColumns: string [] = ['name', 'description']
  dataSource = new MatTableDataSource<any>();


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('MatSort') sort!: MatSort;

  ngOnInit(): void {
    
    this.getAllPackagesService.getPackages().subscribe((res) => {

      this.dataSource.data = res 

      console.log(res)
    })
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
