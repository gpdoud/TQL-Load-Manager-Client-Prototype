import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carrier } from '../carrier.class';
import { CarrierService } from '../carrier.service';

@Component({
  selector: 'app-carrier-detail',
  templateUrl: './carrier-detail.component.html',
  styleUrls: ['./carrier-detail.component.css']
})
export class CarrierDetailComponent implements OnInit {
  carrier!: Carrier;
  id: number =0;


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

  deleteCarrier(){
    this.id = this.route.snapshot.params.id
    this.carriersvc.remove(this.id).subscribe(
      res => {console.log("Success:", res); this.carrier = res; this.router.navigateByUrl("carrier/list");},
      err => {console.error(err)}
    );
  }


}
