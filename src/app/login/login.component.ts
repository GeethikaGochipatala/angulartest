import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  islogin: boolean = true;
  erromessage: string = "";
  constructor(private router: Router, private http: HttpClient) { }
  login() {
    console.log(this.email);
    console.log(this.password);
    let bodyData = {
      email: this.email,
      password: this.password,
    };
    this.http.post("http://localhost:8000/user/login", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      if (resultData.status) {
        this.router.navigate(['home']);
      }
      else {
        alert("Incorrect Email or Password");
        console.log("Eror login");
      }
    });
  }

}