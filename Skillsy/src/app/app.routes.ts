import { Routes,CanActivateFn, CanActivate,  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { authGuard } from './auth.guard';
export const routes: Routes = [
    {path: '', component:HomeComponent, pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
   // {path: 'product/:id', canActivate:[authGuard], component: ProductComponent},
    {path: 'product', canActivate:[authGuard], component: ProductComponent},
//     {path: 'secured', component:SecureComponent, canActivate:[canActivateFn]}
// ];
