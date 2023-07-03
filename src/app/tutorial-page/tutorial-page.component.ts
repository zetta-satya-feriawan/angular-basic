import { Component, OnInit } from "@angular/core"
import { TutorialService } from "../tutorial.service"
import { MatDialog } from "@angular/material/dialog"
import { CreateTutorialComponent } from "./create-tutorial/create-tutorial.component"

@Component({
  selector: "app-tutorial-page",
  templateUrl: "./tutorial-page.component.html",
  styleUrls: ["./tutorial-page.component.css"],
})
export class TutorialPageComponent implements OnInit {
  tutorials: any[] = []

  displayedColumns: string[] = ["title", "type", "description", "action"]
  constructor(
    private tutorialService: TutorialService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadTutorials()
  }

  loadTutorials() {
    this.tutorialService.getAllTutorials().subscribe((tutorials) => {
      this.tutorials = tutorials
      console.log("masuk", this.tutorials)
    })
  }

  redirectToTutorial(link: string): void {
    window.open(link, "_blank")
  }

  reset() {
    console.log("reset")
  }

  deleteTutorial(tutorialID: string): void {
    this.tutorialService
      .deleteTutorial(tutorialID)
      .subscribe((deletedTutorial) => {
        console.log("Delleted tutorial", deletedTutorial)
        this.loadTutorials()
      })
  }

  createTutorialForm() {
    const dialogRef = this.dialog.open(CreateTutorialComponent, {
      width: "100%",
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log("close")
      this.loadTutorials()
    })
  }
}
