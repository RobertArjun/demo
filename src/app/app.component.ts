import { Component } from '@angular/core';
import {CountryService} from "./country.service";
import {PostalCityService} from "./postalcityvalidate.service";
import {ResourceService} from './resource.service';
import {CommonService} from './common.service';

import '../assets/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountryService,PostalCityService,ResourceService,CommonService]
})
export class AppComponent { }
