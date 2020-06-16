import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SubscriptionKeyInterceptor } from './shared/http-interceptor/api-portal-http-interceptor';
import { AuthenticateHttpInterceptor } from './shared/http-interceptor/authenticate-http-interceptor';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    AuthenticateHttpInterceptor,
    SubscriptionKeyInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticateHttpInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SubscriptionKeyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
