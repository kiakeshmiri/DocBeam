import { Injectable } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { ConfigService } from '../../utils/config.service';

import { BaseService } from '../../services/base.service';

import { Observable } from 'rxjs';

// Add the RxJS Observable operators we need in this app.
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class DashboardService extends BaseService {

  baseUrl: string = '';

  constructor(private http: HttpClient, private configService: ConfigService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  getHomeDetails(): Observable<HomeDetails> {
    let authToken = localStorage.getItem('auth_token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${authToken}`
      })
    };

    return this.http.get<HomeDetails>(this.baseUrl + "/dashboard/home", httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }
}