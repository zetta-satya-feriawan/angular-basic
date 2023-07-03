import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { TutorialPageComponent } from "./tutorial-page/tutorial-page.component"

const routes: Routes = [
  { path: "tutorial", component: TutorialPageComponent, pathMatch: "full" },
  { path: "**", redirectTo: "tutorial" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
