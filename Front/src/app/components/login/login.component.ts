import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  
  // Combine all imports in one array
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    // Simulate admin login with hardcoded username and password
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('isAdminAuthenticated', 'true');
      this.router.navigate(['/admin-dashboard']); // Redirect to admin dashboard
    } else {
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
}
