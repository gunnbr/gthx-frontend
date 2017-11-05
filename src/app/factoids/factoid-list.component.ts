import { Component, OnInit } from '@angular/core';
import { IFactoid } from './factoid';
import { FactoidService } from '../factoid.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'gthx-factoid-list',
  templateUrl: './factoid-list.component.html',
  styleUrls: ['./factoid-list.component.css']
})
export class FactoidListComponent implements OnInit {

  constructor(private _factoidService: FactoidService) {
    this.term$
    .debounceTime(1000)
    .distinctUntilChanged()
    .subscribe(term => {
      if (term){
      console.log('  --- ' + term);
      this.search(term);
      }
      else { console.log('  -- <NO SEARCH TERM>');}
    });
   }

  term$ = new Subject<string>();
  factoids: IFactoid[];
  errorMessage: string;
  _searchString: string = '';
  get searchString(): string{
    return this._searchString;
  }
  set searchString(value:string){
    this._searchString = value;
    console.log('searchString set to ' + value);
  }

  search(value:string){
    this._factoidService.searchFactoids(value)
    .subscribe(response => {
        this.factoids = response.data;
       },
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.search(this.searchString);
  }
}
