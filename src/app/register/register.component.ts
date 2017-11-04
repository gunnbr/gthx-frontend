import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gthx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData = { }

  constructor() { }

  ngOnInit() {
  }

  post() {
    console.log(this.registerData)
    //this.authService.registerUser(this.registerData)
  }

}
