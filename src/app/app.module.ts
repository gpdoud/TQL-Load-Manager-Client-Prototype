import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { LoadCreateComponent } from './load/load-create/load-create.component';
import { LoadEditComponent } from './load/load-edit/load-edit.component';
import { LoadListComponent } from './load/load-list/load-list.component';

import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';


import { ShedCreateComponent } from './shed/shed-create/shed-create.component';
import { ShedListComponent } from './shed/shed-list/shed-list.component';
import { ShedDetailComponent } from './shed/shed-detail/shed-detail.component';
import { ShedEditComponent } from './shed/shed-edit/shed-edit.component';

import { CarrierListComponent } from './carrier/carrier-list/carrier-list.component';
import { CarrierEditComponent } from './carrier/carrier-edit/carrier-edit.component';
import { CarrierDetailComponent } from './carrier/carrier-detail/carrier-detail.component';
import { CarrierCreateComponent } from './carrier/carrier-create/carrier-create.component';
import { SearchShedPipe } from './shed/search-shed.pipe';

import { NavbarComponent } from './navbar/navbar.component';
import { E404Component } from './misc/e404/e404.component';
import { AboutComponent } from './misc/about/about.component';

import { SearchUserPipe } from './user/search-user.pipe';

import { DriverCreateComponent } from './carrier/driver/driver-create/driver-create.component';
import { DriverEditComponent } from './carrier/driver/driver-edit/driver-edit.component';
import { DriverDetailComponent } from './carrier/driver/driver-detail/driver-detail.component';
import { DriverListComponent } from './carrier/driver/driver-list/driver-list.component';
import { DispatcherListComponent } from './carrier/dispatcher/dispatcher-list/dispatcher-list.component';
import { DispatcherEditComponent } from './carrier/dispatcher/dispatcher-edit/dispatcher-edit.component';
import { DispatcherCreateComponent } from './carrier/dispatcher/dispatcher-create/dispatcher-create.component';
import { DispatcherDetailComponent } from './carrier/dispatcher/dispatcher-detail/dispatcher-detail.component';
import { DashComponent } from './dash/dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';







@NgModule({
  declarations: [
    AppComponent,

    UserListComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,

    LoadCreateComponent,
    LoadEditComponent,
    LoadListComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ShedCreateComponent,
    ShedListComponent,
    ShedDetailComponent,
    ShedEditComponent,
    CarrierListComponent,
    CarrierEditComponent,
    CarrierDetailComponent,
    CarrierCreateComponent,
    SearchShedPipe,

    NavbarComponent,

    E404Component,
    AboutComponent,

    SearchUserPipe,

    DriverCreateComponent,
    DriverEditComponent,
    DriverDetailComponent,
    DriverListComponent,
    DispatcherListComponent,
    DispatcherEditComponent,
    DispatcherCreateComponent,

    DispatcherDetailComponent,
    
    

    DispatcherDetailComponent,    
    DashComponent,



    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
