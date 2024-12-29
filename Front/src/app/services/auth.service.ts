import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  // Simulating admin authentication with hardcoded credentials
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'adminpassword') {
      this.isAuthenticated = true;
      localStorage.setItem('isAdminAuthenticated', 'true'); // Persist authentication status
      return true;
    }
    return false;
  }

  // Checking if the admin is authenticated
  isAdminAuthenticated(): boolean {
    return localStorage.getItem('isAdminAuthenticated') === 'true';
  }

  // Logging out the admin
  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isAdminAuthenticated');
    this.router.navigate(['/login']); // Redirect to login page
  }
}
