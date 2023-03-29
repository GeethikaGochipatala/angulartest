import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoansComponent } from './loans/loans.component';
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { LoansformComponent } from './loansform/loansform.component';
import { AgGridModule } from 'ag-grid-angular';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoansComponent,
    LoansformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PasswordModule,
    DividerModule,
    AgGridModule,
    TableModule,
    LoggerModule.forRoot({ serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
