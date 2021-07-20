import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrier } from '../carrier.class';
import { CarrierService } from '../carrier.service';

@Component({
  selector: 'app-carrier-create',
  templateUrl: './carrier-create.component.html',
  styleUrls: ['./carrier-create.component.css']
})
export class CarrierCreateComponent implements OnInit {

  carrier: Carrier = new Carrier();
  carriers: Carrier[] = [];

  constructor(
  private carriersvc: CarrierService,
  private router: Router

  ) { }


    save(): void {
      this.carrier.id = +this.carrier.id;
      this.carriersvc.create(this.carrier).subscribe(
        res => {console.log("Carrier Creation Successful"); this.router.navigateByUrl("carrier/list")
      },
      err => {
        console.error(err);
      });
    }




  ngOnInit(): void {
    this.carriersvc.list().subscribe(
      res => {console.log(res); this.carriers = res;},
      err => {console.error(err);}
    )
  }

}
