import { Component } from '@angular/core';
import { FactoidService } from './factoids/factoid.service';

@Component({
  selector: 'gthx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FactoidService]
})
export class AppComponent {
  title = 'gthx';
}
