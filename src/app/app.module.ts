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

import { SearchCustomerPipe } from './customer/search-customer.pipe';
import { SortPipe } from './misc/sort.pipe';

import { DashComponent } from './dash/dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomersTableComponent } from './dash/customers-table/customers-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CardComponent } from './dash/card/card.component';
import { ProspectsTableComponent } from './dash/prospects-table/prospects-table.component';
import { AccountingTableComponent } from './dash/accounting-table/accounting-table.component';
import { HighprioloadsTableComponent } from './dash/highprioloads-table/highprioloads-table.component';
import { CheckcallsTableComponent } from './dash/checkcalls-table/checkcalls-table.component';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { MiniCardTwelveComponent } from './mini-card-twelve/mini-card-twelve.component';
import { MiniCardLcComponent } from './mini-card-lc/mini-card-lc.component';
import { MiniCardCallsComponent } from './mini-card-calls/mini-card-calls.component';







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
    MiniCardComponent,
    MiniCardTwelveComponent,
    MiniCardLcComponent,
    MiniCardCallsComponent,

    DispatcherDetailComponent,
    SearchCustomerPipe,
    SortPipe,
    
    

    DispatcherDetailComponent,    
    DashComponent, CustomersTableComponent, CardComponent, ProspectsTableComponent, AccountingTableComponent, HighprioloadsTableComponent, CheckcallsTableComponent, MiniCardComponent, MiniCardTwelveComponent, MiniCardLcComponent, MiniCardCallsComponent



    
   

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
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
