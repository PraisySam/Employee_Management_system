import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[] | any;

  constructor(private employesService : EmployeeService){
  }

  ngOnInit(): void{
    this.getEmployees();
  }

  private getEmployees(){
    this.employesService.getEmployeesList().subscribe(response => {
      this.employees= response;
      console.log(response);
 });
  }
}

    /*this.employees=[
      {
        "id":1,
        "FirstName": "SAI",
        "LastName":"RAJ",
        "emailId":"Sai@gmail.com"
      },
      {
        "id":2,
        "FirstName": "PRAISY",
        "LastName":"S",
        "emailId":"Praisy@gmail.com"
      }
    ]


  }*/


