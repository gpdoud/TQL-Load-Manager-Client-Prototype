import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carrier } from '../carrier.class';
import { CarrierService } from '../carrier.service';

@Component({
  selector: 'app-carrier-edit',
  templateUrl: './carrier-edit.component.html',
  styleUrls: ['./carrier-edit.component.css']
})
export class CarrierEditComponent implements OnInit {

  carrier!: Carrier;
  id: number = 0;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carriersvc: CarrierService

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.carriersvc.get(this.id).subscribe(
      res => {console.log(res); this.carrier = res;},
      err => {console.error(err)}
    )
  }

  save(): void {
    this.carrier.id = +this.carrier.id;
    this.carriersvc.change(this.carrier).subscribe(
      res => {console.log("Create Successful"); this.router.navigateByUrl("carrier/list");},
      err => {console.error(err)}
    );
  }



}
