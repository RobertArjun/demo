import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ResourceService{
  private _url: string ="src/app/us_resource.json";

  constructor (private _http: Http){}

  getLablesValues(){
   return this._http.get(this._url).map(res=>res.json());
 }
}
