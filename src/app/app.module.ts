import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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



@NgModule({
  declarations: [
    AppComponent,
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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
