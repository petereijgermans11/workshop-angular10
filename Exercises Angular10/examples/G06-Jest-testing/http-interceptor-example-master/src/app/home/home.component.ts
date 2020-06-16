import { Component, OnInit } from '@angular/core';
import { StatusService } from '../shared/service/status.service';
import { Subject, Observable, of } from 'rxjs';
import {switchMap, startWith, catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public forecast: Observable<any>;
  public statusText$: Observable<string>;
  public triggerStatus$ = new Subject();

  constructor(
    private readonly statusService: StatusService
  ) { }

  ngOnInit() {}

  getForecast() {
    this.forecast = this.statusService
      .currentForecast$()
      .pipe(tap(data => console.log(data)));
  }


}
