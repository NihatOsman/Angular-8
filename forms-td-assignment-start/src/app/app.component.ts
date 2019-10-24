import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signupForm', {static: false}) sgnForm: NgForm;
  defaultQuestion = 'advanced';
  user = {
    email: '',
    password: ''
  };
  subscription = '';

  onSubmit() {
    if (this.sgnForm.valid) {
      this.user.email = this.sgnForm.value.email;
      this.user.password = this.sgnForm.value.password;
      this.subscription = this.sgnForm.value.subscription;
      this.sgnForm.reset();
    }
  }
}
