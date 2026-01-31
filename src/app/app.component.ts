import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  users: any[] = [];
  name = '';
  email = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res;
    });
  }

  addUser() {
    this.userService.addUser({
      name: this.name,
      email: this.email
    }).subscribe(() => {
      this.loadUsers();
      this.name = '';
      this.email = '';
    });
  }
}
