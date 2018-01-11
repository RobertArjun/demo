import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostalCityService{
 private _url: string ="http://172.26.156.28:8090/user/postalvalidate";

 constructor (private _http: Http){}

  getCityValidate(modelData,elementD){
    var dataModel=this.JSON_MapperCity(modelData,elementD);
     return this._http.post(this._url,dataModel)
     .map(res=>res.json());
  }

  JSON_MapperCity(modelData,elementD){
    var data={
      countryCode:  modelData[elementD+'Country'],
      city: modelData[elementD+'City'],
      validCode: "2"
    };
    return data;
  }

  getPostalValidate(modelData,elementD){
   var dataModel=this.JSON_Mapper_Zip(modelData,elementD);
    return this._http.post(this._url,dataModel)
    .map(res=>res.json());
 }

 JSON_Mapper_Zip(modelData,elementD){
   var data={
     countryCode: modelData[elementD+'Country'],
     postalCode: modelData[elementD+'Zip'],
     validCode: "1"
   };
   return data;
 }
}
