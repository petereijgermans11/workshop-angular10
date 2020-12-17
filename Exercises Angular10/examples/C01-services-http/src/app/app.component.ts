import {Component, OnInit, OnDestroy} from '@angular/core';
import {City} from './shared/model/city.model';
import {CityService} from "./shared/services/city.service";
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styles: [`.cityPhoto {
        max-width: 200px
    }`]
})

// Class
export class AppComponent implements OnInit {
    // Properties
    public currentCity: City;
    public cities: City[];
    public cityPhoto: string;
    private sub: Subscription;

    // Inject instance of CityService
    constructor(private cityService: CityService) {

    }

    public ngOnInit() {
      this.sub = this.cityService.getCities()
            .subscribe(cityData => {						// 1. success handler
                    this.cities = cityData
                },
                err => console.log('ERROR: ', err),			// 2. error handler
                () => console.log('Getting cities complete'));	// 3. complete handler
    }

    public getCity(city: City) {
        this.currentCity = city;
        this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
    }

    public ngOnDestroy() {
    // If subscribed, we must unsubscribe before Angular destroys the component.
    // Failure to do so could create a memory leak.
        this.sub.unsubscribe();
    }
}
