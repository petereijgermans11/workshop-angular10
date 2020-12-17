// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'BB2-eventbinding';
// }

import {Component} from '@angular/core';
import {City} from './shared/city.model'

// component with multi-line HTML-string
// List of cities via *ngFor
// Conditional heading is shown with *ngIf
@Component({
	selector   : 'app-root',
	templateUrl: 'app.component.html'
})

// Class with properties, array containing cities
export class AppComponent {
	// Properties on the component/class
  public name: string = 'Peter Eijgermans';
  public cities: City[] = [
		new City(1, 'Groningen', 'Groningen'),
		new City(2, 'Hengelo', 'Overijssel'),
		new City(3, 'Den Haag', 'Zuid-Holland'),
		new City(4, 'Enschede', 'Overijssel'),
	];
  public counter: number =0;
  public txtKeyUp : string = '';

	// 1. Bind to click-event in the page
	btnClick(){
		alert('Je hebt '+ ++this.counter +' keer geklikt');
	}

	// 2. Bind to keyUp-event in the textbox
	onKeyUp(event:any){
		this.txtKeyUp = event.target.value;
	}

	 // 3. Bind to keyUp-event via local template variable
	betterKeyUp(){
		//... do nothing, for now
	}
}
