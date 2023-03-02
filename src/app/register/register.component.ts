 
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  FirstName: string ="";
  LastName: string ="";
  Email: string ="";
  Password: string ="";
  PhoneNumber:number[]=[];

  constructor(private http: HttpClient,private router: Router) 
  {
  }

  ngOnInit(): void
  {
  }

  register()
  {
    let bodyData = 
    {
      "FirstName" : this.FirstName,
      "LastName" : this.LastName,
      "Email" : this.Email,
      "Password" : this.Password,
      "PhoneNumber":this.PhoneNumber,
    };
    this.http.post("http://localhost:8000/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        if (resultData.status) 
        {
      
           this.router.navigate(["login"]);
        } 
        else
         {
          alert("Incorrect Email or Password");
          console.log("Eror registration");
        }


        // alert("Employee Registered Successfully")
    });
  }

  save()
  {
    this.register();
  }

} 