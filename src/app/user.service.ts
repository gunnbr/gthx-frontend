import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IUser } from './admin-users/user';
import { IUserResponse } from './admin-users/user-response';

@Injectable()
export class UserService {

  private _userUrl = environment.SERVER_URL + '/users';

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<IUserResponse>{
    return this._http.get<IUserResponse>(this._userUrl)
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse){
    console.log('UserService ERROR: ' + err.message);
    return Observable.throw(err.message);
  }
}
