import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customer: Customer = new Customer();
  users: User[] = [];

  constructor(
    private custsvc: CustomerService,
    private usersvc: UserService,
    private router: Router
  ) { }

  saveCreate(): void {
    this.customer.userId =+ this.customer.userId;
    this.custsvc.create(this.customer).subscribe(
      res => {console.debug("edit successful");
              this.router.navigateByUrl("/customer/list");},
      err => {console.error(err);}        
    );}
  
  ngOnInit(): void {
     this.usersvc.list().subscribe(
        res => {this.users = res},
        err => {console.error(err)}
    )
  }

}
