import { Component,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  reason = '';


  openSidenav(): void {
    if (!this.sidenav.opened) {
      this.sidenav.open();
    }
  }

  close(reason: string): void {
    this.reason = reason;
    if (this.sidenav.opened) {
      this.sidenav.close();
    }
  }

  onBackdropClick(): void {
    this.close('Backdrop clicked');
  }

  onEscapeKeyDown(): void {
    this.close('Escape key pressed');
  }
}
