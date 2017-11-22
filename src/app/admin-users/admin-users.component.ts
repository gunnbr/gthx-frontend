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
  displayDialog: boolean;
  password: string;
  password2: string;
  user: IUser;

  selectedRows: Array<any>;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this._userService.getUsers()
    .subscribe(response => {
        console.log('Got user response: ' + JSON.stringify(response))
        this.users = response;
      },
      error => this.errorMessage = <any>error);
  }

  onSubmit(){
    console.log(JSON.stringify(this.users));
  }

  onRowSelect(event) {
    console.log(JSON.stringify(event.data));
    //this.newCar = false;
    this.user = event.data;
    this.displayDialog = true;
  }

  cancel() {
    this.user = null;
    this.displayDialog = false;
  }
  
  save() {
    this.user = null;
    this.displayDialog = false;
  }

  delete() {
    this.user = null;
    this.displayDialog = false;
  }
}
