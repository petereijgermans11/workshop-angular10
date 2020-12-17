import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './shared/model/city.model';
import { CityService } from './shared/services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`.cityPhoto{max-width:200px}`]
})

// Class
export class AppComponent implements OnInit {
  // Properties
  public currentCity: City;
  public cities: Observable<City[]>;
  public cityPhoto: string;


  constructor(private cityService: CityService) {}

  public ngOnInit() {}

  public loadCities() {
    this.cities = this.cityService.getCities();
  }

  public getCity(city: City) {
    this.currentCity = city;
    this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
  }

  public clear() {
    this.cities = null;
  }
  public clearCache() {
    this.cityService.clearCache();
  }
}
