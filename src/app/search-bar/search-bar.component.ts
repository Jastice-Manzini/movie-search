import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/movie.model';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private movieService: MovieService) {
  }

  searchControl = new FormControl();
  options: Movie[] = [];
  filteredOptions: Observable<Movie[]>;

  ngOnInit() {

     this.searchControl.valueChanges.subscribe(value => {
      this.movieService.searchMovie(value).subscribe((response: any) => {
        console.log('response', response);
        this.options = response.body.results;
       });
    })
  }

  displayFn(movie?: Movie): string | undefined {
    return movie ? movie.title : undefined;
  }
}
