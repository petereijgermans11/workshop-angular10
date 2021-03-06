// Credits: http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpResponse } from '@angular/common/http';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable()
export class WikipediaService {
  constructor(private jsonp: HttpClient) {}

  search(keyword: string) {
    let search = new HttpParams();
    search.set('action', 'opensearch');
    search.set('search', keyword);
    search.set('format', 'json');
    return this.jsonp
      .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {
        search
      })
      .pipe(distinctUntilChanged(), map(res => res.json()));
  }
}
