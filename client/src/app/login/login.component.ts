import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoginMode: boolean = true;
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    if (this.isLoginMode) {
      // Handle login form submission
      console.log('Login form submitted');
    } else {
      // Handle signup form submission
      console.log('Signup form submitted');
    }
  }

  toggleMode(isLoginMode: boolean) {
    this.isLoginMode = isLoginMode;
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
