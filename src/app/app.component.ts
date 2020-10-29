import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get isLogin() {
    return localStorage.getItem('role') === 'Admin';
  }

  constructor(private router: Router) {}

  login() {
    localStorage.setItem('role', 'Admin');
    this.router.navigate(['user']);
  }

  logout() {
    localStorage.removeItem('role');
    this.router.navigate(['/']);
  }
}
