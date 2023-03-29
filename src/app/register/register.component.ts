import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss',
  ],
  styles: [`
  :host ::ng-deep .p-password input {
      width: 15rem
  }
`]
})
export class RegisterComponent implements OnInit {
  value4: string;
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  phonenumber: number[] = [];
  public registerform = this.formbuilder.group({
    firstname: [''],
    lastname: [''],
    email: [''],
    password: [''],
    phonenumber: [''],
  })
  constructor(private logger: NGXLogger, private http: HttpClient, private router: Router, private formbuilder: FormBuilder) {
  }
  ngOnInit(): void {
  }
  register() {
    this.logger.info("info");
    this.logger.warn("warn");
    this.logger.debug("debug");
    this.logger.error("error");
    console.log("log");
    let bodyData =
    {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "email": this.email,
      "password": this.password,
      "phonenumber": this.phonenumber,
    };
    this.http.post("http://localhost:8000/user/register", bodyData).subscribe((resultData: any) => {
      this.logger.log(resultData);
      console.log(resultData);
      if (bodyData) {
        this.router.navigate(["login"]);
      }
      else {
        alert("Incorrect Email or Password");
        console.log("Eror registration");
        this.logger.error("error registration");
      }
    });
  }
  save() {
    this.register();
  }
} 