import { Injectable } from "@angular/core"
import { Observable, BehaviorSubject } from "rxjs"
import { Song } from "./playlist.service"

@Injectable({
  providedIn: "root",
})
export class SongService {
  private songsSubject: BehaviorSubject<Song[]> = new BehaviorSubject<Song[]>(
    []
  )
  songs$: Observable<Song[]> = this.songsSubject.asObservable()

  constructor() {
    this.initializeSongs()
  }

  initializeSongs(): void {
    const songs = [
      {
        title: "Faded",
        artist: "Alan Walker",
        duration: 3,
      },
      {
        title: "Alone",
        artist: "Alan Walker",
        duration: 4,
      },
      {
        title: "Darks",
        artist: "Alan Walker",
        duration: 5,
      },
    ]

    this.songsSubject.next(songs)
  }

  getSongs(): Observable<Song[]> {
    return this.songs$
  }

  addSong(song: Song): void {
    const songs = this.songsSubject.getValue()
    songs.push(song)
    this.songsSubject.next(songs)
  }

  removeSong(index: number): void {
    const songs = this.songsSubject.getValue()
    songs.splice(index, 1)
    this.songsSubject.next(songs)
  }

  // updateSong(song: Song): void {
  //   const songs = this.songsSubject.getValue()
  //   const songIndex = songs.findIndex((s) => s.title === this.songTitle)
  //   if (songIndex !== -1) {
  //     songs[songIndex] = { ...song }
  //     this.songsSubject.next(songs)
  //   }
  // }
  updateSongByTitle(title: string, updatedSong: Song): void {
    const songs = this.songsSubject.getValue()
    const songIndex = songs.findIndex((s) => s.title === title)
    if (songIndex !== -1) {
      songs[songIndex] = { ...updatedSong }
      this.songsSubject.next(songs)
    }
  }
}
