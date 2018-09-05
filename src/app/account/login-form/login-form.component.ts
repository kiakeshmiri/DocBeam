import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { finalize, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { Credentials } from '../../models/credentials.interface';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted: boolean;
  credentials: Credentials = { email: '', password: '', userName: '' };

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute
    , private meta: Meta) {
      this.meta.addTag({ name: 'google-signin-client_id', 
      content: '718366265318-a4766nun9ogatr8rpr87gb7tedt554ah.apps.googleusercontent.com' });
    }

  ngOnInit() {

    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.brandNew = param['brandNew'];
        this.credentials.email = param['email'];
        this.credentials.userName = param['email'];
      });
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  login({ value, valid }: { value: Credentials, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    value.userName = value.email;
    if (valid) {
      this.userService.login(value)
        .pipe(
          finalize(() => this.isRequesting = false),
        )
        .subscribe(
          result => {
            if (result) {
              console.log(result);
              this.router.navigate(['/dashboard/home']);
            }
          },
          error => this.errors = error
        );
    }
  }

}