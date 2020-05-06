import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ContactFormComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
