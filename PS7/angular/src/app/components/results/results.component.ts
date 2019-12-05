import { Component, OnInit, Input } from '@angular/core';
import { Rate } from '../../models/rate';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() rates: Rate[];

  constructor() { }

  ngOnInit() {
  }

}
