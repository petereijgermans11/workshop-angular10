// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'CC1-services-static';
// }

import {Component, OnInit} from '@angular/core';
import {City} from './shared/city.model';
import {CityService} from "./shared/city.service";

@Component({
	selector   : 'app-root',
	templateUrl: 'app.component.html',
	styles     : [`.cityPhoto{max-width:200px}`]
})

// Class
export class AppComponent implements OnInit {
	// Properties
	public currentCity: City;
  public cities: City[];
  public cityPhoto: string;

	// Injection of cityService, which is of type CityService.
	// Notice the use of the keyword `private` here.
	constructor(private cityService: CityService) {

	}

  public ngOnInit() {
		this.cities = this.cityService.getCities();
	}

  public getCity(city: City) {
		this.currentCity = this.cityService.getCity(city.id);
		this.cityPhoto   = `assets/img/${this.currentCity.name}.jpg`;
		console.log('Fetched city:', this.currentCity);
	}
}
