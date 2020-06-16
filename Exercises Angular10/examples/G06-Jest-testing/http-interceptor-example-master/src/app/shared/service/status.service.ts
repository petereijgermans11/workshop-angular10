import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  //private status$: Observable<string>;
  readonly WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=8566d604cd9402b65394b034e52aa2af&q=Gouda';

  constructor(
    private readonly httpClient: HttpClient) {}

  currentForecast$(): Observable<any> {
    return this.httpClient
      .get(this.WEATHER_URL)
      .pipe(map(response => response['currently']));
  }
}
