import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { PlaylistListComponent } from "./playlist-list/playlist-list.component"
import { SongListComponent } from "./song-list/song-list.component"
import { CreateSongComponent } from "./create-song/create-song.component"
import { CreatePlaylistComponent } from "./create-playlist/create-playlist.component"

const routes: Routes = [
  { path: "playlists", component: PlaylistListComponent },
  {
    path: "songs",
    component: SongListComponent,
  },
  { path: "songs/create", component: CreateSongComponent },
  { path: "songs/edit/:title", component: CreateSongComponent },
  { path: "playlists/create", component: CreatePlaylistComponent },
  { path: "playlists/edit/:name", component: CreatePlaylistComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
