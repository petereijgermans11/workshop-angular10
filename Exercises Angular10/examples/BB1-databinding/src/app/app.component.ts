

import {Component, OnInit} from '@angular/core';
import {City} from "./shared/city.model";

@Component({
    // 1. add component description/annotations here
    selector   : 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
    public name: string;
    public city: string;
    public cities: string[];
    public citiesVolgensModel: City[];

    constructor() {

    }

    ngOnInit(){
        this.name = 'Peter Eijgermans';
        this.city = 'Groningen';
        this.cities = ['Groningen', 'Hengelo', 'Den Haag', 'Enschede'];
        this.citiesVolgensModel = [
            new City(1, 'Groningen', 'Groningen', 'NE'),
            new City(2, 'Hengelo', 'Overijssel'),
            new City(3, 'Den Haag', 'Zuid-Holland'),
            new City(4, 'Enschede', 'Overijssel'),
        ]
    }
}

