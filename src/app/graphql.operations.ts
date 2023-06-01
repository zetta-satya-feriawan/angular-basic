import { gql } from "apollo-angular";

const GET_MOVIES = gql`
query GetPosts {
  allFilms {
    films {
      id
      title
      director
      releaseDate
    }
  }
}
`

export { GET_MOVIES }