import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer = new Customer();
  users: User[] = [];
  id: number = 0;

  constructor(
    private custsvc: CustomerService,
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { } 
  saveEdit(): void {
    this.customer.userId =+ this.customer.userId;
    this.custsvc.change(this.customer).subscribe(
      res => {console.debug("edit successful");
              this.router.navigateByUrl("/customer/list");},
      err => {console.error(err);}        
    );}
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
      this.usersvc.list().subscribe(
          res => {this.users = res},
          err => {console.error(err)}
      )
      this.custsvc.get(this.id).subscribe(
        res => {console.debug("Customer:", res);
        this.customer = res;},
        err => { console.error(err);}
      );
  }

}
