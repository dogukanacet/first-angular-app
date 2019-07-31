import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import Movie from '../../models/movie'
import Credits from '../../models/credits'
import Details from '../../models/details'


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  details: Details[]
  movies: Movie[]
  search: string = "search/movie"
  query: string = "&query="
  path: string = "https://api.themoviedb.org/3/"
  api_key: string = "?api_key=6298ebd066f18ba169d303bf2858107d"
  popular: string = "movie/popular"





  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.path + this.popular + this.api_key)
  }

  getDetails(movieID: number): Observable<Details[]> {
    return this.http.get<Details[]>(this.path + "movie/" + movieID + this.api_key)
  }

  getCredits(movieID: number): Observable<Credits[]> {
    return this.http.get<Credits[]>(this.path + "movie/" + movieID + "/credits" + this.api_key)
  }

  searchBox(searchKey: String): Observable<any[]> {
    let url = this.path + this.search + this.api_key + this.query + searchKey
    return this.http.get<any[]>(url)
  }
}
