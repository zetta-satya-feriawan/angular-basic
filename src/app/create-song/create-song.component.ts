import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { SongService } from "../song.service"
import { Song } from "../playlist.service"

@Component({
  selector: "app-create-song",
  templateUrl: "./create-song.component.html",
  styleUrls: ["./create-song.component.css"],
})
export class CreateSongComponent implements OnInit {
  songForm: FormGroup
  mode: "create" | "edit" | undefined
  songTitle: string | undefined

  constructor(
    private formBuilder: FormBuilder,
    private songService: SongService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.songForm = this.formBuilder.group({
      title: ["", Validators.required],
      artist: ["", Validators.required],
      duration: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.songTitle = params["title"]
      this.mode = this.songTitle ? "edit" : "create"

      if (this.mode === "edit") {
        this.songService.getSongs().subscribe((songs) => {
          const song = songs.find((s) => s.title === this.songTitle)
          if (song) {
            this.songForm.patchValue({
              title: this.songTitle,
              artist: song.artist,
              duration: song.duration,
            })
          }
        })
      }
    })
  }

  onSubmit(): void {
    if (this.songForm.invalid) {
      return
    }

    const songData: Song = {
      title: this.songForm.value.title,
      artist: this.songForm.value.artist,
      duration: this.songForm.value.duration,
    }

    if (this.mode === "create") {
      this.songService.addSong(songData)
    } else if (this.mode === "edit") {
      this.songService.updateSongByTitle(this.songTitle!, songData)
    }

    this.router.navigate(["/"])
  }
}
