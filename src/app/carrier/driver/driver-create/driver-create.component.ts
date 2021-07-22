import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../driver.class';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver-create',
  templateUrl: './driver-create.component.html',
  styleUrls: ['./driver-create.component.css']
})
export class DriverCreateComponent implements OnInit {

  driver: Driver = new Driver();
  drivers: Driver[] = [];

  constructor(
    private driversvc: DriverService,
    private router: Router

  ) { }


  save(): void {
    this.driver.id = +this.driver.id;
    console.debug("B4", this.driver);
    this.driversvc.create(this.driver).subscribe(
      res => {
        console.log("Create successful"); this.router.navigateByUrl("driver/list")
      },
      err => {
        console.error(err);
      });

  }




  ngOnInit(): void {
    this.driversvc.list().subscribe(
      res => {console.log(res); this.drivers = res;},
      err => {console.error(err);}
    )
  }

}
