// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'BB3-attributebinding';
// }

import {Component} from '@angular/core';
import {City} from './shared/city.model';

// component with multi-line HTML-string
// New: scoped classes
@Component({
    selector   : 'app-root',
    templateUrl: 'app.component.html',
    styles     : [`
		.cityPhoto {
			max-width : 300px;
			border : 1px solid #333;
			padding : 10px;
			border-radius : 10px;
		}
	`]
})

// Class
export class AppComponent {
    // Properties
    public name: string = 'Peter Eijgermans';
    public cities: City[] = [
        new City(1, 'Groningen', 'Groningen'),
        new City(2, 'Hengelo', 'Overijssel'),
        new City(3, 'Den Haag', 'Zuid-Holland'),
        new City(4, 'Enschede', 'Overijssel'),
    ];
    public textVisible: boolean = true;
    public currentCity: City = null;
    public cityPhoto: string = '';

    // Update selected city in UI, using ES6 string interpolation
    public deleteCity(city: City) {
        this.currentCity = city;
      this.cities.splice(this.currentCity.id, 1)
    }

    public toggleText(){
        this.textVisible  =  !this.textVisible;
    }

}
