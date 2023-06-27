import { Component } from "@angular/core"
import { Playlist, PlaylistService, Song } from "../playlist.service"
import { SongService } from "../song.service"
import { Router } from "@angular/router"

@Component({
  selector: "app-song-list",
  templateUrl: "./song-list.component.html",
  styleUrls: ["./song-list.component.css"],
})
export class SongListComponent {
  songs: Song[] = []
  playlists: Playlist[] = []

  constructor(
    private songService: SongService,
    private playlistService: PlaylistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.songService.getSongs().subscribe((songs) => {
      this.songs = songs
    })

    this.playlistService.getPlaylists().subscribe((playlists) => {
      this.playlists = playlists
    })
  }

  deleteSong(songIndex: number): void {
    this.songService.removeSong(songIndex)
  }

  addSongToPlaylist(index: string, song: Song): void {
    const selectedPlaylistIndex: number = parseInt(index, 10)
    if (!isNaN(selectedPlaylistIndex)) {
      const selectedPlaylist: Playlist = this.playlists[selectedPlaylistIndex]
      this.playlistService.addSongToPlaylist(
        selectedPlaylistIndex.toString(),
        song
      )
    }
  }
  editSong(index: number): void {
    const song = this.songs[index]
    this.router.navigate(["/songs/edit", song.title])
  }
}
