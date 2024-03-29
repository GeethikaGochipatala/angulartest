import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  loansArray: any[] = [];
  currentloansID = "";
  loantype: string = "";
  borrowername: string = "";
  amount: number[] = [];
  date: number[] = [];
  description: string = "";
  cities: any[];

  constructor(private http: HttpClient, private router: Router) {

    this.getAllloans();
  }
  getAllloans() {

    this.http.get("http://localhost:8000/loans/getAll")
      .subscribe((resultData: any) => {

        console.log(resultData);
        this.loansArray = resultData.data;
      });

  }

  setUpdate(data: any) {
    this.loantype = data.loantype;
    this.borrowername = data.borrowername;
    this.amount = data.amount;
    this.date = data.date;
    this.description = data.description;
    this.currentloansID = data._id;
  }

  UpdateRecords() {
    let bodyData = {

      "loantype": this.loantype,
      "borrowername": this.borrowername,
      "amount": this.amount,
      "date": this.date,
      "description": this.description,
    };

    this.http.patch("http://localhost:8000/loans/update" + "/" + this.currentloansID, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("loan Updated")
      this.getAllloans();

    });
  }

  setDelete(data: any) {
    this.http.delete("http://localhost:8000/loans/delete" + "/" + data._id).subscribe((resultData: any) => {
      console.log(resultData);
      alert("loan Deleted")
      this.getAllloans();

    });
  }
  Back() {
    this.router.navigateByUrl("loansform")
  }

  save() {
    if (this.currentloansID == '') {
      this.loansform();
    }
    // else
    // {
    //  this.UpdateRecords();
    // }       

  }

  loansform() {

    let bodyData = {

      "loantype": this.loantype,
      "borrowername": this.borrowername,
      "amount": this.amount,
      "date": this.date,
      "description": this.description,
    };
    this.http.post("http://localhost:8000/loans/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("loan Successfully Created")
      this.loantype = '';
      this.borrowername = '';
      this.amount = [];
      this.date = [];
      this.description = '';
      this.router.navigateByUrl("loansform")

    });
  }

}
