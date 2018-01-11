import { Component,Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'your-dialog',
  template: `
  <div class="container">
  <div class="form-group row">
    <div class="col-sm-12">
  <md-icon>place</md-icon> <span> {{data.fromCountry}}</span>
  <span *ngIf="data.fromCountry != null">{{data.fromZip}}</span>
  <span *ngIf="data.fromCountry != null">{{data.fromCity}}</span>
  </div>
  </div>
  <div class="form-group row">
  <div class="col-sm-12">
  <md-icon>place</md-icon> <span> {{data.toCountry}}</span>
  <span *ngIf="data.fromCountry != null">{{data.toZip}}</span>
  <span *ngIf="data.fromCountry != null">{{data.toCity}}</span>
  </div>
  </div>
  <div class="form-group row">
  <div class="col-sm-12">
  <md-icon>info outline</md-icon> <span> {{data.packageNo}}</span>
  <span *ngIf="data.weight != null">{{data.weight}}</span>
  <span *ngIf="data.weight != null">{{data.weightType}}</span>
  <span>{{data.packageIdentifical}}</span>
  <span>{{data.isAccountNumber}}</span>
  <span>{{data.pickupType}}</span>
  <span>{{data.defaultShipDate | date}}</span>
  </div>
  </div>

  </div>

  `,
})
export class SuccessDialogComponent{
   constructor(@Inject(MD_DIALOG_DATA) public data: any) { }
}
