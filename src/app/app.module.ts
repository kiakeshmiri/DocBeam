import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HttpXhrBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { ConfigService } from './services/config.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AccountModule } from './account/account.module';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardModule } from './dashboard/dashboard.module';
import { NotesModule } from './notes/notes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    AccountModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    MatComponentsModule,
    LayoutModule,
    DashboardModule,
    NotesModule
  ],
  providers: [
    ConfigService,
    {
      provide: HttpXhrBackend,
      useClass: AuthenticateXHRBackend
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
