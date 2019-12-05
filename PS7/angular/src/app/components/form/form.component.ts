import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Rate } from '../../models/rate';
import { RateServiceService } from '../../services/rate-service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formGroup = new FormGroup(
    {
      date: new FormControl('', [Validators.required])
    }
  );

  @Output() rates = new EventEmitter<Rate[]>();

  constructor(
    private rateService: RateServiceService
  ) { }

  ngOnInit() {
  }

  submitQuery(): void {
    this.rateService.queryApi(this.formGroup.value.date)
      .subscribe(rate => {
        console.log('hello', rate);
        this.rates.emit([rate, rate, rate]);
      });
  }

}
