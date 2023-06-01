import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
actors! : string[]
  constructor(private movieService : MovieService){}
ngOnInit(): void {
    this.actors  = this.movieService.getActors()
}
}
