import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import Movie from '../../models/movie'
import Details from '../../models/details'
import Credits from '../../models/credits'

import { Title } from "@angular/platform-browser";
import { MatDialog } from '@angular/material'

import { inject } from '@angular/core/testing';





@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {
  movies: Movie[]
  details: Details[]
  credits: Credits[]
  searchKey: String
  movieID: number = 299534



  constructor(private movieService: MovieService,
    private titleService: Title,
    private dialog: MatDialog,
    private modalService: NgbModal) {

    this.titleService.setTitle("MovieStore");


  }
  mymodal = document.getElementsByClassName('my-modal')
  ngOnInit() {
    this.getMovies()
    this.getDetails()
    this.getCredits()
  }

  getMovies() {
    this.movieService.getMovies().subscribe(res => {
      this.movies = res['results']
        , err => {
          alert("hata")
        }
    })
  }

  getDetails() {

    this.movieService.getDetails(this.movieID).subscribe(res => {
      this.details = res
      console.log(JSON.stringify(res))
    })
  }
  getCredits() {
    this.movieService.getCredits(this.movieID).subscribe(res => {
      this.credits = res
      console.log(JSON.stringify(res))
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
}


