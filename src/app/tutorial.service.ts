import { Injectable } from "@angular/core"
import { Apollo } from "apollo-angular"
import { Observable, map } from "rxjs"
import gql from "graphql-tag"

@Injectable({
  providedIn: "root",
})
export class TutorialService {
  constructor(private apollo: Apollo) {}

  getAllTutorials(): Observable<any> {
    const query = gql`
      {
        GetAllTutorials {
          title
          link
          _id
          user_type_ids {
            name
          }
          description
        }
      }
    `
    return this.apollo
      .watchQuery<any>({ query, fetchPolicy: "network-only" })
      .valueChanges.pipe(map((result) => result.data.GetAllTutorials))
  }

  deleteTutorial(tutorialID: string): Observable<any> {
    const mutation = gql`
      mutation DeleteTutorial($id: ID!) {
        DeleteTutorial(_id: $id) {
          title
        }
      }
    `

    return this.apollo
      .mutate<any>({
        mutation,
        variables: { id: tutorialID },
        errorPolicy: "all",
      })
      .pipe(map((result) => result.data["DeleteTutorial"]))
  }

  createTutorial(
    title: string,
    description: string,
    link: string,
    userTypeIds: string[],
    message: string
  ): Observable<any> {
    const mutation = gql`
      mutation CreateTutorial($tutorialInput: TutorialInput!) {
        CreateTutorial(tutorial_input: $tutorialInput) {
          title
        }
      }
    `

    return this.apollo
      .mutate<any>({
        mutation,
        variables: {
          tutorialInput: {
            title,
            description,
            link,
            user_type_ids: userTypeIds,
            message,
          },
        },
        errorPolicy: "all",
      })
      .pipe(map((result) => result.data["CreateTutorial"]))
  }
}
