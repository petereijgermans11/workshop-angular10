import {Component} from '@angular/core';
import {City} from './shared/city.model';

@Component({
	selector   : 'app-root',
	templateUrl: 'app-02.component.html'
})

// push new city to the array
export class AppComponent2 {
	// Properties
  public name: string = 'Peter Eijgermans';
  public cities: City[] = [
		new City(1, 'Groningen', 'Groningen'),
		new City(2, 'Hengelo', 'Overijssel'),
		new City(3, 'Den Haag', 'Zuid-Holland'),
		new City(4, 'Enschede', 'Overijssel'),
	];

  public addCity(txtCity) {
		// Calculate dummy new ID.
		let newID: number = this.cities.length + 1;

		// Create new City-object and add it to the array.
		let newCity: City = new City(newID, txtCity.value, 'Unknown');
		this.cities.push(newCity);
		txtCity.value = '';
	}
}
