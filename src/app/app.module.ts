import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { SongListComponent } from "./song-list/song-list.component"
import { PlaylistListComponent } from "./playlist-list/playlist-list.component"
import { CreatePlaylistComponent } from "./create-playlist/create-playlist.component"
import { CreateSongComponent } from "./create-song/create-song.component"
import { MatInputModule } from "@angular/material/input"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatButtonModule } from "@angular/material/button"
import { MatListModule } from "@angular/material/list"
import { MatIconModule } from "@angular/material/icon"
import { MatSelectModule } from "@angular/material/select"

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    PlaylistListComponent,
    CreatePlaylistComponent,
    CreateSongComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
