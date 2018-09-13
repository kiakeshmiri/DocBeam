import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'account/register', component: RegistrationFormComponent},
  { path: 'account/login', component: LoginFormComponent},
]);
