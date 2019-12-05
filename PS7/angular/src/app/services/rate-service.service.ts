import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rate } from '../models/rate';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RateServiceService {

  private queryDate: string;
  private ratesUrl: string;
  constructor(
    private http: HttpClient
  ) { }

  queryApi(date: string): Observable<any> {
    this.queryDate = date;
    this.ratesUrl = 'http://localhost:3000/form';
    return this.http.post<Rate>(this.ratesUrl, {date: this.queryDate});
  }
}
