import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { AboutComponent } from './about/about.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  {path: 'movies', component: MovieListComponent},
  {path: 'actors', component: ActorListComponent},
  {path : 'about', component: AboutComponent},
  {path: 'movies/:title', component:MovieDetailComponent},
  {path : '' , redirectTo: '/movies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
