import {Component, OnInit} from '@angular/core';
import {City} from './shared/city.model';

@Component({
    selector   : 'app-root',
    templateUrl: 'app.component.html',
    styles     : [`.cityPhoto{max-width:200px}`]
})

// Clas
export class AppComponent implements OnInit {
    // Properties
    public currentCity: City;
    public cityPhoto: string;
    public cities: City[];

    public ngOnInit() {
        this.cities = [
            new City(1, 'Groningen', 'Groningen'),
            new City(2, 'Hengelo', 'Overijssel'),
            new City(3, 'Den Haag', 'Zuid-Holland'),
            new City(4, 'Enschede', 'Overijssel'),
        ];
        this.currentCity = this.cities[0];
        this.changeCity();
    }

    public changeCity() {
        console.log(this.currentCity);
        this.cityPhoto = `assets/img/${this.currentCity}.jpg`;
    }
}
