import {Component} from '@angular/core';
import {WeatherService} from "./shared/services/weather.service";
import { IWeather } from './shared/model/weather.model';
import { Observable } from 'rxjs';

@Component({
	selector   : 'app-root',
	templateUrl: 'app.component.html',
})

export class AppComponent {
	public weather$:Observable<IWeather>;

	constructor(private weatherService:WeatherService) {
	}

  searchWeather(keyword) {
    this.weather$ = this.weatherService.searchWeather(keyword);
  }

	// searchWeather(keyword) {
	// 	this.weatherService.searchWeather(keyword)
	// 		.subscribe((data:WeatherModel) => {
	// 				this.weathers = data;				// 1. success handler, mapped on client-sided Model
	// 			},
	// 			err => console.log(err),						// 2. error handler
	// 			()=> console.log('Getting Weather complete...')	// 3. complete handler
	// 		)
	// }
}
