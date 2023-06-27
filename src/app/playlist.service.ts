import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable, map } from "rxjs"

export interface Playlist {
  name: string
  totalDuration: number
  totalSongs: number
  description: string
  songs: Song[]
}

export interface Song {
  title: string
  artist: string
  duration: number
}

@Injectable({
  providedIn: "root",
})
export class PlaylistService {
  private playlistsSubject: BehaviorSubject<Playlist[]> = new BehaviorSubject<
    Playlist[]
  >([])
  playlists$: Observable<Playlist[]> = this.playlistsSubject.asObservable()

  constructor() {
    this.initializePlaylists()
  }

  initializePlaylists(): void {
    const playlists: Playlist[] = [
      {
        name: "Kopikustik",
        totalDuration: 5,
        totalSongs: 2,
        description:
          "More than a coffee, this is all of your favorite acoustic songs.",
        songs: [
          {
            title: "Cigarettes of Ours",
            artist: "Ardhito Pramono",
            duration: 3,
          },
          {
            title: "Walking Back Home",
            artist: "Vira Talisa",
            duration: 2,
          },
        ],
      },
      {
        name: "Anime Hits",
        totalDuration: 13,
        totalSongs: 3,
        description:
          "Listen to your favorite Anime songs, all in one playlist.",
        songs: [
          {
            title: "Renai Circulation",
            artist: "Kana Hanazawa",
            duration: 4,
          },
          {
            title: "Platinum Disco",
            artist: "Tsukihi Phoenix",
            duration: 4,
          },
          {
            title: "Silhouette",
            artist: "KANA-BOON",
            duration: 5,
          },
        ],
      },
    ]

    this.playlistsSubject.next(playlists)
  }

  getPlaylists(): Observable<Playlist[]> {
    return this.playlists$
  }

  addPlaylist(playlist: Playlist): void {
    const playlists = this.playlistsSubject.getValue()
    playlists.push(playlist)
    this.playlistsSubject.next(playlists)
  }

  removePlaylist(index: number): void {
    const playlists = this.playlistsSubject.getValue()
    playlists.splice(index, 1)
    this.playlistsSubject.next(playlists)
  }

  updatePlaylist(index: number, playlist: Playlist): void {
    const playlists = this.playlistsSubject.getValue()
    const existingPlaylist = playlists[index]

    existingPlaylist.name = playlist.name
    existingPlaylist.description = playlist.description

    playlist.totalSongs = existingPlaylist.totalSongs
    playlist.totalDuration = existingPlaylist.totalDuration

    playlists[index] = playlist

    this.playlistsSubject.next([...playlists])
  }

  addSongToPlaylist(index: string, song: Song): void {
    const playlistIndex: number = parseInt(index, 10)
    const playlists = this.playlistsSubject.getValue()

    if (
      !isNaN(playlistIndex) &&
      playlistIndex >= 0 &&
      playlistIndex < playlists.length
    ) {
      const playlist = playlists[playlistIndex]
      playlist.songs.push(song)
      playlist.totalDuration += song.duration
      playlist.totalSongs += 1

      this.playlistsSubject.next([...playlists])
    }
  }

  removeSongFromPlaylist(playlistIndex: number, songIndex: number): void {
    const playlists = this.playlistsSubject.getValue()

    if (playlistIndex >= 0 && playlistIndex < playlists.length) {
      const playlist = playlists[playlistIndex]

      if (songIndex >= 0 && songIndex < playlist.songs.length) {
        const removedSong = playlist.songs.splice(songIndex, 1)[0]
        playlist.totalDuration -= removedSong.duration
        playlist.totalSongs -= 1

        this.playlistsSubject.next([...playlists])
      }
    }
  }
  getPlaylistByName(name: string): Observable<Playlist | undefined> {
    return this.playlists$.pipe(
      map((playlists: any[]) => playlists.find((p) => p.name === name))
    )
  }

  getPlaylistIndexByName(name: string): number {
    const playlists = this.playlistsSubject.getValue()
    return playlists.findIndex((playlist) => playlist.name === name)
  }
}
