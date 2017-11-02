import { Component, OnInit } from '@angular/core';
import { FactoidService } from '../factoid.service';
import { IStat } from './stat';

@Component({
  selector: 'gthx-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  factoids: IStat[];
  errorMessage: string;
  
  constructor(private _factoidService: FactoidService) { }

  ngOnInit() {
    this._factoidService.getStats()
    .subscribe(response => {
        this.factoids = response.data;
       },
      error => this.errorMessage = <any>error);
  }
}
