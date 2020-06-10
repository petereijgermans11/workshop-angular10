// app.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { City } from './shared/city.model';
import { CityService } from './shared/city.service';
import { CityDetailComponent } from './city-detail.component'; // Nieuwe component invoegen
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

// Class
export class AppComponent implements OnInit {
  // Properties
  public cities: City[];
  public currentCity: boolean = false;
  private sub: Subscription;

  constructor(private cityService: CityService) {

  }
  ngOnInit() {
    this.sub = this.cityService.getCities().subscribe(
      cityData => {
        this.cities = cityData; // 1. success handler
      },
      err => console.log(err), // 2. error handler
      () => console.log('Getting cities complete...') // 3. complete handler
    );
  }

  public getCity() {
    this.currentCity = true;
    // later: this.currentCity = city;
  }

  public clearCity() {
    this.currentCity = null;
  }

  ngOnDestroy() {
    // If subscribed, we must unsubscribe before Angular destroys the component.
    // Failure to do so could create a memory leak.
    this.sub.unsubscribe();
  }
}
