import { OrderDetalsComponent } from './order-detals/order-detals.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {path:'',redirectTo:'order',pathMatch:'full'},
  {path:'home',component:OrderDetalsComponent},
  {path:'order/:orderId',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
