import { Injectable } from '@angular/core';
import { IFactoid } from './factoid';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from '@angular/common/http';
import { ISearchResponse } from './search-response';

@Injectable()
export class FactoidService {

  private _factoidUrl = 'http://ec2-52-10-64-85.us-west-2.compute.amazonaws.com/cgi-bin/factoids.py?searchstring=';
  constructor(private _http: HttpClient) { }

  searchFactoids(searchString:string): Observable<ISearchResponse>{
    return this._http.get<ISearchResponse>(this._factoidUrl + searchString)
    //.do(data => console.log('Factoids: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getFactoids(): IFactoid[]{
    return [
      {
        item: 'i3',
        value: 'A great printer',
        nick: 'Prusa'
      }
    ];
  }
}
