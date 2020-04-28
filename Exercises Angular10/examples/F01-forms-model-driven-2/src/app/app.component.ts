import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<h1>Hello World!</h1>
		<h2>This is Angular</h2>
		<reactive-form></reactive-form>
		<a href="http://angular.io" target="_blank">Angular Website</a>
	`
})

export class AppComponent implements OnInit {
	constructor() {
	}

	ngOnInit() {
		console.log('Hello World - Angular is running');
	}
}
