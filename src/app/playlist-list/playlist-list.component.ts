import { Component, OnInit } from "@angular/core"
import { Playlist, PlaylistService } from "../playlist.service"

@Component({
  selector: "app-playlist-list",
  templateUrl: "./playlist-list.component.html",
  styleUrls: ["./playlist-list.component.css"],
})
export class PlaylistListComponent implements OnInit {
  playlists: Playlist[] = []
  showSongs: boolean[] = []

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.playlistService.getPlaylists().subscribe((playlists) => {
      this.playlists = playlists
    })
  }
  toggleSongs(playlistIndex: number): void {
    this.showSongs[playlistIndex] = !this.showSongs[playlistIndex]
  }

  deleteSong(playlistIndex: number, songIndex: number): void {
    this.playlistService.removeSongFromPlaylist(playlistIndex, songIndex)
  }

  deletePlaylist(playlistIndex: number): void {
    this.playlistService.removePlaylist(playlistIndex)
  }
}
