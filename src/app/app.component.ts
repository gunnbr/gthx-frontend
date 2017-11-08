import { Component, OnInit } from '@angular/core';
import { FactoidService } from './factoid.service';
import { MenuItem } from 'primeng/primeng';
import { AuthService } from './auth.service'
import { ILoginData } from './loginData';

@Component({
  selector: 'gthx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FactoidService]
})
export class AppComponent implements OnInit{
  menuItems: MenuItem[];
  miniMenuItems: MenuItem[];
  title = 'gthx';
  loginData:ILoginData = {
    username: '',
    pwd: ''
  };
  errorMessage:string;

  displayLoginDialog: boolean = false;

  constructor(public authService: AuthService) { }

  ngOnInit(){
    this.menuItems = [
      {label: "Home", icon: "fa-home", routerLink: ["/welcome"]},
      {label: "Commands", icon: "fa-question-circle", routerLink: ["/commands"]},
      {label: "Factoids", icon: "fa-list", routerLink: ["/factoids"]},
      {label: "Top stats", icon: "fa-info-circle", routerLink: ["/stats"]},
      {label: "Admin", icon: "fa-cogs", items: [
          {label: 'Factoids', routerLink: ["/admin"]},
          {label: 'Users', routerLink: ["/admin"]}
      ]},
    ];

    this.miniMenuItems = [];
    this.menuItems.forEach( (item : MenuItem) => {
      let miniItem = { icon: item.icon, routerLink: item.routerLink }
      this.miniMenuItems.push(miniItem);
    })
  }

  showLoginDialog() {
    this.displayLoginDialog = true;
  }

  hideLoginDialog() {
    this.displayLoginDialog = false;
  }

  async login(){
    // TODO: Check that username and password have been entered
    let error = await this.authService.loginUser(this.loginData);
    if (error){
      this.errorMessage = error
    }
    else{
      this.hideLoginDialog()
    }
  }
}
