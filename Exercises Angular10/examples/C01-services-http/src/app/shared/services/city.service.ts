import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {City} from "../model/city.model";

@Injectable()
export class CityService {

    constructor(private http: HttpClient) {
    }

    // return all cities
    public getCities(): Observable<City[]> {
        return this.http.get<City[]>('assets/data/cities.json');
    }
}
