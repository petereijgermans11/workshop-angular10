import { Component, OnInit } from '@angular/core';
import { City } from './shared/model/city.model';
import { CityService } from './shared/services/city.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styles: [
		`
			.cityPhoto {
				max-width: 200px;
			}
		`
	]
})

// Class
export class AppComponent implements OnInit {
	// Properties
	public currentCity: City;
	// cities$ is now an observable to an array of cities.
  public cities$: Observable<City[]>;
  public cityPhoto: string;

	constructor(private cityService: CityService) {}

  public ngOnInit() {
		// The  OBSERVABLE from the service is now directly assigned to the class property.
		// no more .subscribe(), this is being handled
		// by | async in the html
		this.cities$ = this.cityService.getCities();
	}

  public getCity(city: City) {
		this.currentCity = city;
		this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
	}
}
