import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../models/AppUser';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Customer } from '../../models/Customer';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  errors: string;
  isRequesting: boolean;
  submitted = false;
  customer: Customer;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.customer = new Customer();
    this.customer.identity = new AppUser();
    this.isRequesting = false;
  }

  registerUser() {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    this.userService.register(this.customer)
      .pipe(
        finalize(() => this.isRequesting = false),
      )
      .subscribe(
        result => {
          console.log(result);
          if (result) {
            this.router.navigate(['/account/login'], { queryParams: { brandNew: true, email: this.customer.identity.userName } });
          }
        },
        error => this.errors = error
      );
  }

}
