import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import Movies from '../../models/movies'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  path: string = "https://api.themoviedb.org"
  api_key: string = "api_key=6298ebd066f18ba169d303bf2858107d"
  movies: Movies[]

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.path + "/3/list/1?" + this.api_key)

  }
}
