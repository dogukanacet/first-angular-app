import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service'
import Movie from '../../models/movie'
import { Title } from "@angular/platform-browser";
import TvSerie from 'src/app/models/tvSerie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {
  movies: Movie[]
  tvSeries: TvSerie[]
  searchKey: String


  constructor(private movieService: MovieService, private titleService: Title) {
    this.titleService.setTitle("MovieStore");
  }

  ngOnInit() {
    this.getMovies()
  }

  getMovies() {
    this.movieService.getMovies().subscribe(res => {
      this.movies = res['results']
        , err => {
          alert("hata")
        }
    })
  }
  getTvSeries() {
    this.movieService.getTvSeries().subscribe(res => {
      this.movies = res['results'],
        err => {
          alert('hata')
        }
    })
  }
  search() {
    this.movieService.search(this.searchKey).subscribe(res => {
      this.movies  = res['results']
    })
  }
}
