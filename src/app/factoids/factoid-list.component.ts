import { Component, OnInit } from '@angular/core';
import { IFactoid } from './factoid';
import { FactoidService } from '../factoid.service';

@Component({
  selector: 'gthx-factoid-list',
  templateUrl: './factoid-list.component.html',
  styleUrls: ['./factoid-list.component.css']
})
export class FactoidListComponent implements OnInit {

  constructor(private _factoidService: FactoidService) { }

  factoids: IFactoid[];
  errorMessage: string;
  _searchString: string = 'prusa';
  get searchString(): string{
    return this._searchString;
  }
  set searchString(value:string){
    this._searchString = value;
    console.log('searchString set to ' + value);
  }

  ngOnInit() {
    this._factoidService.searchFactoids(this.searchString)
    .subscribe(response => {
        this.factoids = response.data;
       },
      error => this.errorMessage = <any>error);
  }
}
