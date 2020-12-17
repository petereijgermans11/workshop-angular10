import {Component, OnDestroy} from '@angular/core';
import {MovieService} from "./shared/services/movie.service";
import {map} from "rxjs/operators";
import {Subscription} from 'rxjs';

// Component annotation.
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})

// Class
export class AppComponent {
    // Properties
    public movies: any; // TODO: Should be typed as MovieModel, or the like.
    private sub: Subscription;

    constructor(private movieService: MovieService) {

    }

  public searchMovies(keyword) {
      this.sub = this.movieService.searchMovies(keyword)
            .pipe(
                map((movies: any) => movies.Search)
            )
            .subscribe(movieData => {
                    this.movies = movieData;				// 1. success handler
                },
                err => console.log(err),						// 2. error handler
                () => console.log('Getting movies complete...')	// 3. complete handler
            )
    }

  public ngOnDestroy() {
    // If subscribed, we must unsubscribe before Angular destroys the component.
    // Failure to do so could create a memory leak.
    this.sub.unsubscribe();
  }
}
