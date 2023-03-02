import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  Email: string = '';
  Password: string = '';
  isLogin: boolean = true;
  erroMessage: string = "";

  constructor(private router: Router,private http: HttpClient) {}

  login() {
    console.log(this.Email);
    console.log(this.Password);

    let bodyData = {
      Email: this.Email,
      Password: this.Password,
    };

        this.http.post("http://localhost:8000/user/login", bodyData).subscribe(  (resultData: any) => 
        {
          console.log(resultData);

        if (resultData.status) 
        {
      
          this.router.navigate(["home"]);
        } 
        else
         {
          alert("Incorrect Email or Password");
          console.log("Eror login");
        }
      });
    }

}