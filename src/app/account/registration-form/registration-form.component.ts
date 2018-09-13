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
  appUser: AppUser;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.appUser = new AppUser();
    this.isRequesting = false;
  }

  registerUser({ value, valid }: { value: Customer, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.userService.register(value.email, this.appUser.password, value.firstName, value.lastName, value.location)
        .pipe(
          finalize(() => this.isRequesting = false),
        )
        .subscribe(
          result => {
            console.log(result);
            if (result) {
              this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
            }
          },
          error => this.errors = error
        );
    }
  }

}
