import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-cost',
  templateUrl: './create-cost.component.html',
  styleUrls: ['./create-cost.component.scss']
})
export class CreateCostComponent {

  private dataSubject = new Subject<any>()

  constructor(
    public dialogRef: MatDialogRef<CreateCostComponent>){
  }

  costForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required)
  })


  submit(){
    // const value = parseInt(this.costForm.value.cost)
    this.dialogRef.close(this.costForm.value, )
  }


  onDataClosed(){
    return this.dataSubject.asObservable()
  }

}
