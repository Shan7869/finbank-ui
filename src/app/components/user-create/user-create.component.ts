import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ]
})
export class UserCreateComponent {
  user: User = {
    username: '',
    password: '',
    email: ''
  };
  message: any;

  constructor(private userService: UserService, private router: Router) {}

  createUser(): void {
    this.userService.createUser(this.user).subscribe({
      next: (response) => {
        this.message = response;
        
        // Corrected object access
        if (this.message['SUCCESS']) {
          alert(this.message['SUCCESS']);  // Show the success message
          this.router.navigate(['/home']); // Navigate to the home page
        } else {
          alert(this.message['FAILED'] || 'Operation failed'); // Handle failed message
        }
      },
      error: (error) => {
        // Handle error scenario
        console.error('Error:', error);
        alert('An error occurred while creating the user.'); // Optional: alert on error
      }
    });
  }
}