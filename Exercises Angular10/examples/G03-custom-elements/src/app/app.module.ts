import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, ContactFormComponent]
})

export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(ContactFormComponent, {injector});
    customElements.define('contact-form', el);
  }
}
