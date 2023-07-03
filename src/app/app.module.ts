import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { TutorialPageComponent } from "./tutorial-page/tutorial-page.component"
import { MatIconModule } from "@angular/material/icon"
import { NavbarTutorialPageComponent } from "./tutorial-page/navbar-tutorial-page/navbar-tutorial-page.component"
import { MatTableModule } from "@angular/material/table"
import { GraphQLModule } from "./graphql.module"
import { HttpClientModule } from "@angular/common/http"
import { MatButtonModule } from "@angular/material/button"
import { MatDialogModule } from "@angular/material/dialog"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MatSnackBarModule } from "@angular/material/snack-bar"
import { MatCardModule } from "@angular/material/card"
import { CreateTutorialComponent } from "./tutorial-page/create-tutorial/create-tutorial.component"
@NgModule({
  declarations: [
    AppComponent,
    TutorialPageComponent,
    NavbarTutorialPageComponent,
    CreateTutorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    GraphQLModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
