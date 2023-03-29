import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { LoansformComponent } from './loansform/loansform.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'loansform', component: LoansformComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'navbar', component: NavbarComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



