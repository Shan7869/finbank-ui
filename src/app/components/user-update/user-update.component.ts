import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
  imports: [MatFormFieldModule, FormsModule]
})
export class UserUpdateComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
    email: ''
  };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(id).subscribe((data) => (this.user = data));
  }

  updateUser(): void {
    this.userService.updateUser(1, this.user).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}