import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { Playlist, PlaylistService } from "../playlist.service"

@Component({
  selector: "app-create-playlist",
  templateUrl: "./create-playlist.component.html",
  styleUrls: ["./create-playlist.component.css"],
})
export class CreatePlaylistComponent implements OnInit {
  playlistForm: FormGroup
  mode: "create" | "edit" | undefined
  playlistName: string | undefined

  constructor(
    private formBuilder: FormBuilder,
    private playlistService: PlaylistService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.playlistForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playlistName = params["name"]
      this.mode = this.playlistName ? "edit" : "create"

      if (this.mode === "edit") {
        this.playlistService
          .getPlaylistByName(this.playlistName!)
          .subscribe((playlist) => {
            if (playlist) {
              this.playlistForm.patchValue({
                name: playlist.name,
                description: playlist.description,
              })
            }
          })
      }
    })
  }

  onSubmit(): void {
    if (this.playlistForm.invalid) {
      return
    }

    const playlistData: Playlist = {
      name: this.playlistForm.value.name,
      description: this.playlistForm.value.description,
      totalDuration: 0,
      totalSongs: 0,
      songs: [],
    }

    if (this.mode === "create") {
      this.playlistService.addPlaylist(playlistData)
    } else if (this.mode === "edit" && this.playlistName) {
      const playlistIndex = this.playlistService.getPlaylistIndexByName(
        this.playlistName
      )
      if (playlistIndex !== -1) {
        this.playlistService.updatePlaylist(playlistIndex, playlistData)
      }
    }

    this.playlistForm.reset()
    this.router.navigate(["/"])
  }
}
