import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      "title": "Inception",
      "description": "A skilled thief is given the task of planting an idea into the mind of a CEO through dream-sharing technology.",
      "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
      "title": "The Shawshank Redemption",
      "description": "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
      "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
    },
    {
      "title": "The Dark Knight",
      "description": "Batman teams up with Commissioner Gordon and the energetic district attorney to dismantle Gotham City's organized crime syndicates.",
      "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
    },
    {
      "title": "Pulp Fiction",
      "description": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "actors": ["John Travolta", "Samuel L. Jackson", "Uma Thurman"]
    },
    {
      "title": "The Godfather",
      "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      "actors": ["Marlon Brando", "Al Pacino", "James Caan"]
    },
    {
      "title": "Fight Club",
      "description": "An insomniac office worker and a soap salesman form an underground fight club that evolves into something much more.",
      "actors": ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
    },
    {
      "title": "Forrest Gump",
      "description": "A simple-minded but kind-hearted man witnesses and influences several historical events in 20th-century United States.",
      "actors": ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
      "title": "The Matrix",
      "description": "A computer hacker learns about the true nature of his reality and his role in the war against the controllers of it.",
      "actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "description": "A hobbit and a group of companions set out on a journey to destroy a powerful ring and save their land from the Dark Lord.",
      "actors": ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"]
    },
    {
      "title": "Inglourious Basterds",
      "description": "In Nazi-occupied France during World War II, a group of Jewish-American soldiers plan to assassinate Nazi leaders.",
      "actors": ["Brad Pitt", "Christoph Waltz", "Diane Kruger"]
    }    
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieByTitle(title: string): any {
    return this.movies.find(movie => movie.title === title);
  }
  getActors():string[] {
    const actors : string[]= []
    this.movies.forEach(movie => {
      actors.push(...movie.actors)
    });
    return actors
  }
}
