import {Component} from '@angular/core';
import {WeatherService} from "./shared/services/weather.service";
import { IWeather } from './shared/model/weather.model';
import { Observable } from 'rxjs';

@Component({
	selector   : 'live-weather-dashboard',
	templateUrl: 'weather.component.html',
})

export class WeatherComponent {
	public weather$:Observable<IWeather>;

	constructor(private weatherService:WeatherService) {
	}

  searchWeather(keyword) {
    this.weather$ = this.weatherService.searchWeather(keyword);
  }
}
