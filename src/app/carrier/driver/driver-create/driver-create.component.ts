import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carrier } from '../../carrier.class';
import { Driver } from '../driver.class';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver-create',
  templateUrl: './driver-create.component.html',
  styleUrls: ['./driver-create.component.css']
})
export class DriverCreateComponent implements OnInit {

  
  newDriver= new Driver()
  drivers: Driver[] = [];
  carrierId: number = 0;
  carrier! : Carrier;

  constructor(
    private driversvc: DriverService,
    private route: ActivatedRoute,
    private router: Router

  ) { }


  save(): void {
    this.newDriver.carrierId = +this.carrierId
    console.debug("B4", this.newDriver);
    this.driversvc.create(this.newDriver).subscribe(
      res => {
        console.log("Create successful"); this.router.navigateByUrl(`carrier/detail/${this.getId()}`)
      },
      err => {
        console.error(err);
      });

  }


  getId(): number {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    return id;
  }


  ngOnInit(): void {
    this.driversvc.list().subscribe(
      res => {console.log(res); this.drivers = res;},
      err => {console.error(err);}
    )
    this.carrierId = this.getId()
  }

}
