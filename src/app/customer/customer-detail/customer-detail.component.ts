import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer = new Customer();
  user: User = new User();
  id: number = 0;

  constructor(
    private custsvc: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  deleteCust(): void {
    this.id = this.route.snapshot.params.id;
    this.custsvc.remove(this.customer).subscribe(
      res => {console.debug("delete successful");
              this.router.navigateByUrl("/customer/list");},
      err => {console.error(err);}        
    );}
    ngOnInit(): void {
      this.id = this.route.snapshot.params.id;  
      this.custsvc.get(this.id).subscribe(
        res => {
          console.debug("Customer:", res);
          this.customer = res;
        },
        err => {console.error(err);}
      )
    }


}
