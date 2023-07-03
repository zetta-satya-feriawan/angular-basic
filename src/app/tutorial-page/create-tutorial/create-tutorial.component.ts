import { Component } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { MatDialogRef } from "@angular/material/dialog"
import { TutorialService } from "src/app/tutorial.service"

@Component({
  selector: "app-create-tutorial",
  templateUrl: "./create-tutorial.component.html",
  styleUrls: ["./create-tutorial.component.css"],
})
export class CreateTutorialComponent {
  tutorialForm: FormGroup

  constructor(
    public dialogRef: MatDialogRef<CreateTutorialComponent>,
    private tutorialService: TutorialService,
    private formBuilder: FormBuilder
  ) {
    this.tutorialForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      link: ["", Validators.required],
      userTypeIds: ["", Validators.required],
      message: ["", Validators.required],
    })
  }

  createTutorial() {
    if (this.tutorialForm.invalid) {
      return
    }

    const { title, description, link, userTypeIds, message } =
      this.tutorialForm.value

    this.tutorialService
      .createTutorial(title, description, link, userTypeIds, message)
      .subscribe(() => {
        this.tutorialForm.reset()
      })
  }
}
