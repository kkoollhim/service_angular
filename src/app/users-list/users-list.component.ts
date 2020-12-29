import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users$: Observable<user>;
  isActive: user;
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

  onSelect(user) {
    this.isActive = user;
    this.userService.subject.next(user);
  }

}
