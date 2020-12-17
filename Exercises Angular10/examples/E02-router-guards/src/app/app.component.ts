// app.component.ts
import { Component } from '@angular/core';
import { City } from './shared/model/city.model';
import { CityService } from './shared/services/city.service';

@Component({
  selector: 'city-app',
  templateUrl: 'app.component.html'
})

// Class
export class AppComponent {
  // Properties
  public cities: City[];
  public currentCity: City;

  constructor(private cityService: CityService) {

  }

  public ngOnInit() {
    this.getCities();
  }

  public getCity(city: City) {
    this.currentCity = city;
  }

  public clearCity() {
    this.currentCity = null;
  }

  // increase or decrease rating on Event Emitted
  public updateRating(rating: number) {
    this.currentCity.rating += rating;
  }

  //***********************
  // implementation
  //***********************
  public getCities() {
    if (!this.cities) {
      this.cityService.getCities().subscribe(
        cityData => {
          this.cities = cityData; // 1. success handler
        },
        err => console.log(err), // 2. error handler
        () => console.log('Getting cities complete...') // 3. complete handler
      );
    }
  }
}
