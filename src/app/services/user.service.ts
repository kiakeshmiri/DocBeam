import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AppUser } from '../models/AppUser';
import { Customer } from '../models/Customer';
import { Credentials } from '../models/credentials.interface';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  baseUrl = '';

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor(private http: HttpClient, private configService: ConfigService) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();
  }

  register(email: string, password: string, firstName: string, lastName: string, location: string): Observable<String> {
    // let identity: AppUser  = new AppUser();
    // identity.password = password
    // JSON.stringify({password});
    // let body = JSON.stringify({ email, firstName, lastName, location });
    const customer: Customer = new Customer();
    customer.identity = new AppUser();
    customer.identity.password = password;
    customer.identity.userName = email;
    customer.email = email;
    customer.firstName = firstName;
    customer.lastName = lastName;
    customer.location = location;

    console.log(customer);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.post<String>(this.baseUrl + '/accounts', customer, options)
      .pipe(catchError(this.handleError));
  }

  login(credentials: Credentials) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = { headers };
    return this.http
      .post<string>(this.baseUrl + '/auth/login', credentials, options)
      .pipe(
        tap(res => {
          localStorage.setItem('auth_token', (<any>res).auth_token);
          this.loggedIn = true;
          this._authNavStatusSource.next(true);
          return true;
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  facebookLogin(accessToken: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const body = JSON.stringify({ accessToken });
    return this.http
      .post(
        this.baseUrl + '/externalauth/facebook', body, { headers })
      .pipe(
        tap(res => {
          localStorage.setItem('auth_token', (<any>res).auth_token);
          this.loggedIn = true;
          this._authNavStatusSource.next(true);
          return true;
        }),
        catchError(this.handleError)
      );
  }
}
