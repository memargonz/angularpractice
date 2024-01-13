import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Skills';
  quantity:number=0;
  @ViewChild(ProductComponent)
  product: ProductComponent = new ProductComponent;

  ngAfterViewInit(){
      this.product.childMethod();
      this.quantity = this.product.InStock
      console.log(this.quantity);
  }

  p_addProduct(newProduct:string){
      console.log(newProduct);
  } 


 

}
