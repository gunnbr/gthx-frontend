import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'gthx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData : any // TODO: Make a real type for this!

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  post() {
    console.log(this.registerData)
    this.authService.registerUser(this.registerData)
  }

}
