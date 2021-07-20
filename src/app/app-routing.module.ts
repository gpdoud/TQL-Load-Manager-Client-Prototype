
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrierCreateComponent } from './carrier/carrier-create/carrier-create.component';
import { CarrierDetailComponent } from './carrier/carrier-detail/carrier-detail.component';
import { CarrierEditComponent } from './carrier/carrier-edit/carrier-edit.component';
import { CarrierListComponent } from './carrier/carrier-list/carrier-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ShedCreateComponent } from './shed/shed-create/shed-create.component';
import { ShedDetailComponent } from './shed/shed-detail/shed-detail.component';
import { ShedEditComponent } from './shed/shed-edit/shed-edit.component';
import { ShedListComponent } from './shed/shed-list/shed-list.component';


const routes: Routes = [

  {path: '', redirectTo: '/load/list', pathMatch: 'full'},


  {path: 'shed/list', component: ShedListComponent},
  {path: 'shed/edit/:id', component: ShedEditComponent},
  {path: 'shed/create', component: ShedCreateComponent},
  {path: 'shed/detail/:id', component: ShedDetailComponent},

  {path: 'carrier/list', component: CarrierListComponent},
  {path: 'carrier/edit/:id', component: CarrierEditComponent},
  {path: 'carrier/create', component: CarrierCreateComponent},
  {path: 'carrier/detail/:id', component: CarrierDetailComponent},


  {path: 'customer/list', component: CustomerListComponent},
  {path: 'customer/edit/:id', component: CustomerEditComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/detail/:id', component: CustomerDetailComponent},


  // {path: '**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
