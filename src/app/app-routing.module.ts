
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
import { LoadCreateComponent } from './load/load-create/load-create.component';
import { LoadEditComponent } from './load/load-edit/load-edit.component';
import { LoadListComponent } from './load/load-list/load-list.component';
import { E404Component } from './misc/e404/e404.component';
import { ShedCreateComponent } from './shed/shed-create/shed-create.component';
import { ShedDetailComponent } from './shed/shed-detail/shed-detail.component';
import { ShedEditComponent } from './shed/shed-edit/shed-edit.component';
import { ShedListComponent } from './shed/shed-list/shed-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';


const routes: Routes = [

  {path: '', redirectTo: '/load/list', pathMatch: 'full'},



  {path: 'user/list', component: UserListComponent},
  {path: 'user/edit/:id', component: UserEditComponent},
  {path: 'user/create', component: UserCreateComponent},
  {path: 'user/detail/:id', component: UserDetailComponent},
  
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

  {path: 'load/list', component: LoadListComponent},
  {path: 'load/edit/:id', component: LoadEditComponent},
  {path: 'load/create', component: LoadCreateComponent},


  {path: '**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
