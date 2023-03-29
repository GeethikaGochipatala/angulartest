import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent {

  constructor(private http: HttpClient, private router: Router) { }
  columnDefs = [
    { field: 'SNO' },
    { field: 'LoanType' },
    { field: 'Amount' }
  ];

  rowData = [


    { SNO: '1', LoanType: 'Personal loan', Amount: '100000' },
    { SNO: '2', LoanType: 'Student Loan', Amount: '200000' },
    { SNO: '3', LoanType: 'Small business loan', Amount: '100000' },
    { SNO: '4', LoanType: 'Payday loan', Amount: '100000' },
    { SNO: '5', LoanType: 'Loan against property', Amount: '1000000' },
    { SNO: '6', LoanType: 'Home loan', Amount: '500000' },
    { SNO: '7', LoanType: 'Gold loan', Amount: '500000' },
    { SNO: '8', LoanType: 'Mechinery loan', Amount: '100000' },
    { SNO: '9', LoanType: 'Vehicle loan', Amount: '30000' },
    { SNO: '10', LoanType: 'Flexi loan', Amount: '100000' },
    { SNO: '11', LoanType: 'Home loan', Amount: '500000' },
    { SNO: '12', LoanType: 'Gold loan', Amount: '500000' },
    { SNO: '13', LoanType: 'Mechinery loan', Amount: '100000' },
    { SNO: '14', LoanType: 'Vehicle loan', Amount: '30000' },
    { SNO: '15', LoanType: 'Flexi loan', Amount: '100000' },

  ];

  defaultColDef = {
    sortable: true,
    filter: true
  };


}







