import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
  <h2>Product List </h2>
  <li *ngFor= "let employee of employees"> {{employee.name}}</li>
  `,
  styles: ['li {color:purple; margin-top:10px; font-size:1.5em}']
})
export class ProductComponent {
  employees =[
    {
        name:"margonz",
        employeeID: 1234,
        department: "IT"
    },
    {
      name:"huey",
      employeeID: 3234,
      department: "IT"
    },
    {
      name:"fiona",
      employeeID: 634,
      department: "Marketing"
    }

  ]
}
