import { Component, Input, Output, EventEmitter } from '@angular/core';

declare const genRandomNumbers: any;

@Component({
  selector: 'app-product',
  templateUrl: "./product.component.html",
  styles: ['li {color:purple; margin-top:10px; font-size:1.5em}']
})
export class ProductComponent {
  @Input() p_title: string='';
  @Output() c_newProductEvent = new EventEmitter<string>();

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
    InStock:number=10;
     rNum =<[]>genRandomNumbers().sort(function(x:number,y:number) {
      return x-y;
    } );  
    page: number =1;
    itemsToDisplay : number = 10;
 
    pageChanged(event:any){
        this.page=event;
    }


    addProduct(value:string){
      this.c_newProductEvent.emit(value);
    }
 

    childMethod(){
    
    }

}
