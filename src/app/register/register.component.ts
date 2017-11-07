import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IRegisterData } from './registerData';

@Component({
  selector: 'gthx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData : IRegisterData = {
    realname: '',
    username: '',
    email: '',
    password: ''
  }
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  post() {
    console.log(this.registerData)
    this.authService.registerUser(this.registerData)
  }

}
