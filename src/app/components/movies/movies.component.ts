import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service'
import Movies from '../../models/movies'


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {
  movies: Movies[]

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies()
  }

  getMovies() {
    this.moviesService.getMovies().subscribe(res => {
      this.movies = res['items']
        , err => {
          alert("hata")
        }
    })
  }

}
