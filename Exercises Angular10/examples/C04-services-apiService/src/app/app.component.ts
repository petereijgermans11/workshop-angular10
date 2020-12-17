import { Component, OnInit } from '@angular/core';
import { City } from './shared/model/city.model';
import { CityService } from './shared/services/city.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [
    `.cityPhoto {
		max-width : 200px
	}`
  ]
})

// Class
export class AppComponent implements OnInit {
  // Properties
  public currentCity: Observable<City>;
  public cities: Observable<City[]>;
  public showCityForm: boolean = false;

  constructor(private cityService: CityService) {}

  public ngOnInit() {
    this.cities = this.cityService.getCities();
  }

  public getCity(id: number) {
    this.currentCity = this.cityService.getCity(id);
  }

  public addCity(cityForm) {
    // for now: generate random ID
    const randomId = Math.floor(Math.random() * 1000 + 1);
    const newCity = new City(
      randomId,
      cityForm.name,
      cityForm.province,
      0,
      cityForm.highlights
    );

    this.cityService.addCity(newCity).subscribe(response => {
      console.log(response);
      this.cities = this.cityService.getCities(); //fetch newest cities. There should be a better way to do this;
      this.showCityForm = false;
    });
  }

  public clear() {
    this.currentCity = null;
  }
}
