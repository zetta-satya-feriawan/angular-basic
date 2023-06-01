import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

movie! : Movie;

constructor(private route: ActivatedRoute , private movieService: MovieService){}

ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title')
    if(title){
    this.movie = this.movieService.getMovieByTitle(title)
    }}
}
