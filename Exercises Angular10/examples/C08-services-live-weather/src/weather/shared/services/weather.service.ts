import { Injectable } from '@angular/core';
import { WeatherModel, IWeather } from '../model/weather.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
    // My private key. Please sign up for your own key at www.omdbapi.com
  url: string = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=8566d604cd9402b65394b034e52aa2af&';

  constructor(private http: HttpClient) {}

  // return Weather
  public searchWeather(cityname: string): Observable<IWeather> {
    return this.http.get<IWeather>(this.url + `q=${cityname}`).pipe(
      map(response => {
        const weatherdata: IWeather = response;
        return new WeatherModel(
          weatherdata.coord, weatherdata.weather, weatherdata.base, weatherdata.main, weatherdata.wind, weatherdata.clouds, weatherdata.dt, weatherdata.sys, weatherdata.id, weatherdata.name, weatherdata.cod
        );
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
      console.error('ApiService::handleError', error);
      console.info('Did you forget to start json server? (npm run json-server)');
      return Observable.throw(error);
    }

}
