import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
import { UserService } from '../user.service';

@Component({
  selector: 'gthx-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users: IUser[];
  errorMessage: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this._userService.getUsers()
    .subscribe(response => {
        this.users = response.users;
       },
      error => this.errorMessage = <any>error);
  }


}
