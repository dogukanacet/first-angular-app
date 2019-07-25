import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import Movie from '../../models/movie'
import TvSerie from 'src/app/models/tvSerie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  path: string = "https://api.themoviedb.org"
  api_key: string = "api_key=6298ebd066f18ba169d303bf2858107d"
  // https://api.themoviedb.org/3/tv/top_rated?api_key=6298ebd066f18ba169d303bf2858107d

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.path + "/3/trending/movie/week?" + this.api_key)
  }

  getTvSeries(): Observable<TvSerie[]> {
    return this.http.get<TvSerie[]>(this.path + "/3/tv/top_rated?" + this.api_key)
  }
}
