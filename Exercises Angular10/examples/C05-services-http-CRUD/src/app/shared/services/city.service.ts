import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {City} from '../model/city.model';
// Import from rxjs
import {catchError} from "rxjs/operators";

const API_URL = 'http://localhost:3000/cities';
// Set RequestOptions. In this case only the header.
const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable()
export class CityService {


  constructor(private http: HttpClient) {
  }

  // GET: return all cities
  public getCities(): Observable<City[]> {
    return this.http.get<City[]>(API_URL).pipe(
      catchError(err => {
        console.log('Error! Did you forget to start json-server? Run `npm run json-server` to start the server', err);
        return of([])
      })
    )
  }

  // GET: Return 1 City, based on Id
  public getCity(id: number): Observable<City> {
    // FIXME !!!
    return null
  }

  // POST: Add a new City
  public addCity(cityName: string): Observable<City> {

    let newCity = new City(null, cityName);

    // Add city via POST request
    return this.http.post<City>(
      API_URL,
      JSON.stringify(newCity),
      API_ARGS
    )
  }

  // DELETE: Delete city from the .json-file (warning: no trash. City is actually removed)
  public deleteCity(city) {
    // FIXME !!!
    return null;
  }

  // PUT : update a current city
  public updateCity(city: City): Observable<City> {
    // FIXME !!!
    return null;
  }
}
