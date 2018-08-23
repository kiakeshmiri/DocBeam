import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule} from '@angular/forms';
import { routing } from './account.routing';
import { UserService } from '../services/user.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { SharedModule } from '../shared/modules/shared.module';
import { MatComponentsModule } from '../mat-components/mat-components.module';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,     
    routing,
    SharedModule,
    MatComponentsModule
  ],
  declarations: [
    RegistrationFormComponent,
    LoginFormComponent,
  ],
  providers: [UserService]
})
export class AccountModule { }
