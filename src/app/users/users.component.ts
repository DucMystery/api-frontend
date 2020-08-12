import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import {IUser} from './_model/iuser';
import {UserService} from '../service/user.service';


@Component({ templateUrl: 'users.component.html' })
export class UsersComponent {
  loading = false;
  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }
}
