import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import Movie from '../../models/movie'
import Details from '../../models/details'
import Credits from '../../models/credits'

import { Title } from "@angular/platform-browser";
import { MatDialog } from '@angular/material'





@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {
  panelOpenState = false;
  movies: Movie[]
  details: Details[]
  credits: Credits[]
  searchKey: String
  movieID: number



  constructor(private movieService: MovieService,
    private titleService: Title,
    private dialog: MatDialog,
    private modalService: NgbModal,
  ) {

    this.titleService.setTitle("MovieStore");


  }
  ngOnInit() {
    this.getMovies()
    // this.getDetails()
    // this.getCredits()
  }

  getMovies() {
    this.movieService.getMovies().subscribe(res => {
      this.movies = res['results']
        // console.log(res)
        , err => {
          alert("hata")
        }
    })
  }

  getDetails(movieID) {
    this.movieService.getDetails(movieID).subscribe(res => {
      this.details = res
      // console.log(res)
    })
  }
  getCredits(movieID) {
    this.movieService.getCredits(movieID).subscribe(res => {
      this.credits = res['cast']
      // console.log(res)
    })
  }

  searchBox() {
    this.movieService.searchBox(this.searchKey).subscribe(res => {
      this.movies = res['results']
    })
  }
  openVerticallyCentered(content) {
    this.modalService.open(content);
  }
  toggleCast() {
    document.getElementById("cast").classList.toggle('active');
  }
}


