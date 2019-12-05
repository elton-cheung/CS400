import { Component } from '@angular/core';
import { Rate } from './models/rate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rates: Rate[];

  addRates(rates): void {
    this.rates = rates;
  }
}
