import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IFactoid } from './factoids/factoid';
import { ISearchResponse } from './factoids/search-response';
import { IStatResponse } from './stats/stats-response';
import { environment } from '../environments/environment';

@Injectable()
export class FactoidService {

  private _factoidUrl = environment.SERVER_URL + '/factoids/';
  private _statsUrl = environment.SERVER_URL + '/stats/'

  constructor(private _http: HttpClient) { }

  searchFactoids(searchString:string): Observable<IFactoid[]>{
    return this._http.get<IFactoid[]>(this._factoidUrl + searchString)
    //.do(data => console.log('Factoids: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  getStats(): Observable<IStatResponse>{
    return this._http.get<IStatResponse>(this._statsUrl)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
