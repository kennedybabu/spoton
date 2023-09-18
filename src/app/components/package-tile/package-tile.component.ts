import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-tile',
  templateUrl: './package-tile.component.html',
  styleUrls: ['./package-tile.component.scss']
})
export class PackageTileComponent {

  constructor(
    private router:Router
  ){}

  @Input() option!: any 


  bookPackage() {
    this.router.navigate(['booking', this.option.id])
  }

}
