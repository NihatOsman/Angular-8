import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.components.html'
})
export class AuthComponent {
  isLogingMode = true;

  onSwitchMode() {
    this.isLogingMode = !this.isLogingMode;
  }
}
