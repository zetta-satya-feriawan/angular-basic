import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Apollo } from 'apollo-angular'
import { GET_MOVIES } from "../graphql.operations";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  error:any;
  movies :any[] = [];

  constructor(private apollo : Apollo){}
  ngOnInit(): void {
      this.apollo.watchQuery({
        query : GET_MOVIES
      }).valueChanges.subscribe(({error, data} : any)=>{
          this.movies = data.allFilms.films
          this.error = error
      })
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
  }
}
