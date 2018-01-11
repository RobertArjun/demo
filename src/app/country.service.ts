import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class CountryService{
 //private _url: string ="https://wwwdrt.idev.fedex.com/commonDataCal/v2/country/";
private _url: string ="src/app/country_resource.json"
 constructor (private _http: Http){}

  getCountry(){
     return this._http.get(this._url).map(res=>res.json());
  }
/*
 getCountry1(){
    return this._http.get(this._url)
    .map(this.extractData)
    .catch(this._errorHandlar);
  }
  private extractData(res: Response) {
    let body = res.json();
   console.log(body);
    return body.data || { };
  }
  private _errorHandlar(error : Response){
    console.error(error);
    return Observable.throw(error || "Server Error");
  }
*/

}
