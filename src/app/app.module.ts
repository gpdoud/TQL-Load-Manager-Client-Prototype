import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrierListComponent } from './carrier/carrier-list/carrier-list.component';
import { CarrierEditComponent } from './carrier/carrier-edit/carrier-edit.component';
import { CarrierDetailComponent } from './carrier/carrier-detail/carrier-detail.component';
import { CarrierCreateComponent } from './carrier/carrier-create/carrier-create.component';


@NgModule({
  declarations: [
    AppComponent,
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
