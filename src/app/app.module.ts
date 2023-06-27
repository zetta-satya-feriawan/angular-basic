import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { SongListComponent } from "./song-list/song-list.component"
import { PlaylistListComponent } from "./playlist-list/playlist-list.component"
import { CreatePlaylistComponent } from "./create-playlist/create-playlist.component"
import { CreateSongComponent } from "./create-song/create-song.component"

import { FormsModule, ReactiveFormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    PlaylistListComponent,
    CreatePlaylistComponent,
    CreateSongComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
