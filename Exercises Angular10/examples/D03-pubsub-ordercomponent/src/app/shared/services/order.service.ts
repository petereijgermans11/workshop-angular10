// order.service.ts
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { City } from '../model/city.model';

@Injectable()
export class OrderService {
  public stream: Subject<City>;

  constructor() {
    this.stream = new Subject<City>();
  }
}
