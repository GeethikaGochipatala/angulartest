import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loansArray : any[] = [];
  currentloansID = "";
  LoanType: string ="";
  BorrowerName: string ="";
  Amount:number[]=[];
  
  constructor(private http: HttpClient ) 
  {
    this.getAllloans();
  }
  getAllloans() {
  
    this.http.get("http://localhost:8000/loans/getAll")
    .subscribe((resultData: any)=>
    {
       
        console.log(resultData);
        this.loansArray = resultData.data;
    });
  
  }
  
  setUpdate(data: any) 
  {
   this.LoanType = data.LoanType;
   this.BorrowerName = data.BorrowerName;
  this.Amount=data.Amount;
   this.currentloansID = data._id;
  }
  
  UpdateRecords()
  {
    let bodyData = {
      
      "LoanType" : this.LoanType,
      "BorrowerName" : this.BorrowerName,
      "Amount" : this.Amount, 
  
    };
    
    this.http.patch("http://localhost:8000/loans/update"+ "/"+this.currentloansID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("loan Updated")
        this.getAllloans();
      
    });
  }
  
  setDelete(data: any) {
    this.http.delete("http://localhost:8000/loans/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("loan Deleted")
        this.getAllloans();
   
    });
    }
    
  save()
  {
    if(this.currentloansID == '')
    {
        this.loans();
    }
      else
      {
       this.UpdateRecords();
      }       
  
  }
  
  loans()
  {
  
    let bodyData = {
    
      "LoanType" : this.LoanType,
      "BorrowerName" : this.BorrowerName, 
      "Amount" : this.Amount, 
  }; 
    this.http.post("http://localhost:8000/loans/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("loan Successfully Created")
        this.LoanType = '';
        this.BorrowerName= '';
        this.Amount=[];
        this.getAllloans();
    });
  }

  }
