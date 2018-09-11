import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserService } from '../services/user.service';
import { routing } from './account.routing';
import { MatComponentsModule } from '../mat-components/mat-components.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    routing,
    MatComponentsModule
  ],
  declarations: [LoginFormComponent, RegistrationFormComponent],
  providers: [UserService]
})
export class AccountModule { }
