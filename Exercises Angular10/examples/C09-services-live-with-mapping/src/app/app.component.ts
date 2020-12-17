import {Component, OnDestroy} from '@angular/core';
import {MovieService} from "./shared/services/movie.service";
import {MovieModel} from "./shared/model/movie.model";
import {Subscription} from 'rxjs';

// Component annotation.
@Component({
	selector   : 'app-root',
	templateUrl: 'app.component.html',
	styles     : [`.moviePoster {max-height:200px}`]
})

// Class
export class AppComponent {
	// Properties , now a Custom model
	public movies:MovieModel[];
  private sub: Subscription;

	constructor(private movieService:MovieService) {

	}

  public searchMovies(keyword) {
    this.sub = this.movieService.searchMovies(keyword)
			.subscribe((movieData:MovieModel[]) => {
					this.movies = movieData;				// 1. success handler, mapped on client-sided Model
				},
				err => console.log(err),						// 2. error handler
				()=> console.log('Getting movies complete...')	// 3. complete handler
			)
	}

  public ngOnDestroy() {
    // If subscribed, we must unsubscribe before Angular destroys the component.
    // Failure to do so could create a memory leak.
    this.sub.unsubscribe();
  }
}
