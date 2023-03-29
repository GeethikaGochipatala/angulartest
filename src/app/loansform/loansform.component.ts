import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loansform',
  templateUrl: './loansform.component.html',
  styleUrls: ['./loansform.component.scss']
})
export class LoansformComponent {
  loansArray: any[] = [];
  currentloansID = "";
  loantype: string = "";
  borrowername: string = "";
  amount: number[] = [];
  date: number[] = [];
  description: string = "";
  loantable: any;
  editloan: any;
  constructor(private http: HttpClient, private router: Router) {
    this.loantable = true;
    this.getAllloans();
  }
  getAllloans() {
    this.http.get("http://localhost:8000/loans/getAll")
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.loansArray = resultData.data;
      });
  }

  Back() {
    this.loantable = true;
  }

  setUpdate(data: any) {
    this.editloan = true;
    this.loantable = false;
    this.loantype = data.loantype;
    this.borrowername = data.borrowername;
    this.amount = data.amount;
    this.description = data.description;
    this.date = data.date;
    this.currentloansID = data._id;
  }
  Update() {
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
    this.editloan = false;
    this.loantable = true;

  }
  setDelete(data: any) {
    this.http.delete("http://localhost:8000/loans/delete" + "/" + data._id).subscribe((resultData: any) => {
      console.log(resultData);
      alert("loan Deleted")
      this.getAllloans();
    });
  }
}