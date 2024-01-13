import { HttpClientModule } from '@angular/common/http';
import { Component ,  NgModule,  OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share, shareReplay, tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormsModule , HttpClientModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

    customerName:string ="margonz";
    email!: string;
    password!:string;
    data$!: Observable<any>;

  constructor(private http:HttpClient){
      this.data$=http.get("http://localhost:3000/customers")
        .pipe(

          tap(console.log),
          shareReplay()
        );

  }
  onSubmit(form:NgForm){
  console.log(form.value);

  // this.http.post("http://localhost:3000/customers", form.value).subscribe();
  }

  deleteDocument(){
  //  this.http.delete("http://localhost:3000/customers/1").subscribe();
    console.log("deleted");
  }
  ngOnInit(): void {
    this.data$.subscribe();
    this.data$.subscribe();
  }

}
