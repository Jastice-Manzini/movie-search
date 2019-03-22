import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';
import { api_key } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  searchMovie(title: string): Observable<any[]> {
    const apiUrl = `/3/search/movie?api_key=${api_key}&language=en-US&query=${title}&page=1&include_adult=false`;
    return this.httpClient.get(apiUrl,{ observe: 'response' }).pipe( (res: Observable<any[]>) => {
      return res;
    });
  }
}
