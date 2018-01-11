import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {SuccessDialogComponent} from './successdialog.component';
import {CountryService} from './country.service';
import {PostalCityService} from './postalcityvalidate.service';
import {Model} from './model';
import {ResourceService} from './resource.service';
import '../assets/css/styles.css';
@Component({
  selector: 'address-app',
  templateUrl: './addresscomponent.component.html',
  styleUrls: ['./app.component.css']
})
export class AddressComponent implements OnInit {
  isWeight=true;
  ispackageIdentifical = false;
  country = [];
  title:any=[];
  isPostelAwareFromCountry=true;
  isPostelAwareToCountry=true;
  todayTimeStamp = +new Date;
  oneDayTimeStamp = 1000 * 60 * 60 * 24;
  minShipDate = new Date(this.todayTimeStamp - this.oneDayTimeStamp);
  reg = /^-?\d+\.?\d*$/;
  isErrorpkg=false;
  isErrorWeight=false;
  isErrOrginCountry=false;
  isErrtoCountry=false;
  isErrOrginZip = false;
  isErrOrginCity = false;
  isErrtoZip = false;
  isErrtoCity = false;
  fromCountryErrorMsg = "";
  fromZipErrorMsg = "";
  fromCityErrorMsg = "";
  toCountryErrorMsg = "";
  toZipErrorMsg = "";
  toCityErrorMsg = "";
  pkgErrorMsg = "";
  weightErrorMsg = "";
  postalRequiredError = "Please enter a zip/postal code. It is required.";
  postalMinimumLenghtError = "Zip/postal code must have at least 3 characters.";
  postalInvalidError = "Invalid zip/postal code, Please enter a valid zip/postal code.";
  cityRequiredError = "Please enter a City. It is required.";
  cityMinimumLenghtError = "City must have at least 3 characters.";
  cityInvalidError = "Invalid City code, Please enter a valid City.";

  model: Model = {
  fromCountry: "0",
  fromZip: null,
  fromCity: null,
  toCountry: "0",
  toZip: null,
  toCity: null,
  packageNo: "1",
  weight: null,
  weightType: "lbs",
  packageIdentifical: "1",
  isAccountNumber:false,
  pickupType: "SP",
  defaultShipDate:  new Date()
};
constructor(private _resourceService: ResourceService, private _countryService:CountryService ,private _postalCityService:PostalCityService,public dialog: MdDialog) {}

  ngOnInit() {
    this.getLablesValuesService();
    this.getCountryListService();
  }

  getLablesValuesService(){
    this._resourceService.getLablesValues()
    .subscribe(data=>{
      this.title=data.lablesValues;
      console.log('message'+this.title.submit);
    });
  }

// This method is used for get the country from L3
  getCountryListService(){
    this._countryService.getCountry()
    .subscribe(data=>{
      this.country=data.output.countries;
        this.country= this.changeCoutryCode(this.country);
    });
  }

  // This method is use for change countryCode "US" to PR for this country only
  changeCoutryCode(countryies){
    for (var i=0; i<countryies.length; i++) {
      if(countryies[i].countryName == 'PUERTO RICO'){
      countryies[i].countryCode = "PR";
      break;
      }
    }
    return countryies;
  }


  // This Method is used for Country is postalAware or Not
  isPostelAware(cc){
    for (var i=0; i<this.country.length; i++) {
      if(this.country[i].countryCode == cc){
        return this.country[i].postalAware;
      }
  }
  return false;
 }

// This method is used for packgeno validation and show/hide weight based on entered package
 packageChange(){
    if(this.reg.test(this.model.packageNo)){
     if(parseInt(this.model.packageNo) > 1){
       this.model.packageIdentifical= "0";
       this.ispackageIdentifical=true;
       this.isWeight=false;
       this.isErrorpkg=false;
     }else{
        this.ispackageIdentifical=false;
        this.isWeight=true;
         this.isErrorpkg=false;
     }
   }else{
     this.ispackageIdentifical=false;
      this.isWeight=true;
      this.isErrorpkg=true;
      this.pkgErrorMsg = "No. of packages is required and should be numeric.";
   }
 }

 packageNoChange(){
   this.model.weight = null;
   this.isErrorWeight=false;
 }

// This method is used for weight validaion
 weightChange(){
   if(this.reg.test(this.model.weight)){
     this.isErrorWeight=false;
   }else{
     this.isErrorWeight=true;
     this.weightErrorMsg = "Weight is required and should be numeric.";
   }
 }

// This method is used for show/hide the postal/zip or city based country
  CountryChange(elementD){
    if(this.countryValidate(elementD) == false){
    if(elementD == 'to'){
    this.isPostelAwareToCountry=this.isPostelAware(this.model[elementD+'Country']);
    }
    else
    {
    this.isPostelAwareFromCountry=this.isPostelAware(this.model[elementD+'Country']);
    }
  }
  this.clearData(elementD);
  this.hidePostalError(elementD);
  this.hideCityError(elementD);
  }

// This method is used for vlaidate the post/zip
 postalChange(elementD){
   if(this.countryValidate(elementD) === false){
     if(this.model[elementD+'Zip'].length > 3){
       this.hidePostalError(elementD);
      this.validatePostal(this.model,elementD);
     }else{
       this.showPostalError(elementD,this.postalMinimumLenghtError);
     }
   }else{
     this.clearData(elementD);
     this.showPostalError(elementD,this.postalRequiredError);
   }
}

// This method is used for show the postal/zip code error message
  showPostalError(elementD,msg){
    if(elementD == 'to'){
      this.isErrtoZip = true;
      this.toZipErrorMsg = msg;
    }else{
      this.isErrOrginZip=true;
      this.fromZipErrorMsg = msg;
    }
  }

  // This method is used for hide the postal/zip code error message
  hidePostalError(elementD){
    if(elementD == 'to'){
      this.isErrtoZip = false;
    }else{
      this.isErrOrginZip = false;
    }
  }

  // This method is used for show city code error message
  showCityError(elementD,msg){
    if(elementD == 'to'){
      this.isErrtoCity = true;
      this.toCityErrorMsg = msg;
    }else{
      this.isErrOrginCity=true;
      this.fromCityErrorMsg = msg;
    }
  }

  // This method is used for hide city code error message
  hideCityError(elementD){
    if(elementD == 'to'){
      this.isErrtoCity = false;
    }else{
      this.isErrOrginCity = false;
    }
  }

//  This method is used for country validate
countryValidate(elementD){
  if(this.model[elementD +'Country'] === "0"){
    this.showCountryError(elementD);
    return true;
    }
  else
  {
    this.hideCountryError(elementD);
      return false;
  }
}

// This method is used for show the country error
showCountryError(elementD){
  if(elementD == 'to'){
    this.isErrtoCountry = true;
    this.toCountryErrorMsg= "Please select a country. It is required";
  }else{
    this.isErrOrginCountry=true;
    this.fromCountryErrorMsg= "Please select a country. It is required";
  }
}

// This method is used for hide the country error
hideCountryError(elementD){
  if(elementD == 'to'){
    this.isErrtoCountry = false;
  }else{
    this.isErrOrginCountry = false;
  }
}

//This method is used for clear the postal/zip or city data
clearData(elementD){
  this.model[elementD+'City']=null;
  this.model[elementD+'Zip']=null;
}

//This method is used for the validate postal/zip code from the server
validatePostal(modelData,elementD){
  this._postalCityService.getPostalValidate(modelData,elementD)
  .subscribe(data=>{
    if(data.status == false)
     this.showPostalError(elementD,this.postalInvalidError);
    else
     this.hidePostalError(elementD);
  },
  err=>{ this.showPostalError(elementD,this.postalInvalidError); }
);
}

// This method is used for validate the city
cityChange(elementD){
  if(this.countryValidate(elementD) === false){
    if(this.model[elementD+'City'].length > 3){
      this.hideCityError(elementD);
     this.validateCity(this.model,elementD);
    }else{
      this.showCityError(elementD,this.cityMinimumLenghtError);
    }
  }else{
    this.clearData(elementD);
    this.showCityError(elementD,this.cityRequiredError);
  }
}

// This method is used for validate the city from server
validateCity(modelData,elementD){
  this._postalCityService.getCityValidate(modelData,elementD)
  .subscribe(data=>{
    if(data.status == false)
     this.showCityError(elementD,this.cityInvalidError);
    else
     this.hideCityError(elementD);
  },
  err=>{ this.showCityError(elementD,this.cityInvalidError); }
);
}

//This method is used for open Dialog Box
openDialog() {
if(this.validateForm(true)){
  //var newModelData = this.model;
  //var data1 = this.removeNullValues(newModelData);
  let dialogRef = this.dialog.open(SuccessDialogComponent, {
  data: this.model,
});
}
}
/*
 removeNullValues(obj) {
   for (var propName in obj) {
       if (obj[propName] === null || obj[propName] === undefined) {
         delete obj[propName];
       }
     }
     return obj;
}
*/

// This method is used for validate the form
validateForm(flag){
  var validFlag = true;
  if(flag){
    /* Orgin Validation*/
  if(this.model.fromCountry === "0"){
      this.isErrOrginCountry=true
      validFlag = false;
  }else if(this.model.fromCountry !== "0" && this.isPostelAwareFromCountry === true){
    if(this.model.fromZip == null || this.model.fromZip.length < 0 ){
      this.isErrOrginZip = true
      validFlag = false;
    }else if(this.model.fromZip.length > 0 && this.isErrOrginZip === true){
        validFlag = false;
    }
  }else if(this.model.fromCountry !== "0" && this.isPostelAwareFromCountry === false){
    if(this.model.fromCity == null || this.model.fromCity.length < 0 ){
      this.isErrOrginCity = true
      validFlag = false;
    }else if(this.model.fromCity.length > 0 && this.isErrOrginZip === true){
        validFlag = false;
    }
  }
  /* Destination Validation */
  if(this.model.toCountry === "0"){
      this.isErrtoCountry=true
      validFlag = false;
  }else if(this.model.toCountry !== "0" && this.isPostelAwareToCountry === true){
    if(this.model.toZip == null || this.model.toZip.length < 0 ){
      this.isErrtoZip = true
      validFlag = false;
    }else if(this.model.toZip.length > 0 && this.isErrtoZip === true){
        validFlag = false;
    }
  }else if(this.model.toCountry !== "0" && this.isPostelAwareToCountry === false){
    if(this.model.toCity == null || this.model.toCity.length < 0 ){
      this.isErrtoCity = true
      validFlag = false;
    }else if(this.model.toCity.length > 0 && this.isErrtoCity === true){
        validFlag = false;
    }
  }
  /* packageNo Validation */
  if(this.isErrorpkg === true || this.model.packageNo == null){
    this.pkgErrorMsg = "No. of packages is required and should be numeric.";
    validFlag = false;
  }else if(this.model.packageNo != null || this.model.packageIdentifical === '1')
    if(this.model.weight == null){
      this.isErrorWeight=true;
      validFlag = false;
      this.weightErrorMsg = "Weight is required.";
    }else if(this.model.weight != null &&  this.isErrorWeight == true){
      this.weightErrorMsg = "Weight is required and should be numeric.";
      validFlag = false;
    }
  }
  return validFlag;
}
}
