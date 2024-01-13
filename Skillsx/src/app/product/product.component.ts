import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


interface JSP{
  userId:string;
  id:string;
  title: string;
  completed:boolean;
}


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule, HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  todos!: JSP[];
  public fName: string='';
  constructor(private http:HttpClient){


  }
      showMessage(msg:string){
        console.log("hello " + msg + this.fName);
      }


      ngOnInit(){
         /*  this.http.get<JSP[]>("https://jsonplaceholder.typicode.com/todos")
            .subscribe(data => {
              console.log(data);
            }); */
            this.http.get<JSP[]>("https://jsonplaceholder.typicode.com/todos")
            .subscribe(result => {
              this.todos=result;
            });

      }
}
