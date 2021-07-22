import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../driver.class';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.css']
})
export class DriverEditComponent implements OnInit {

  driver! : Driver;
  id: number = 0;

  constructor(
private route : ActivatedRoute,
private router: Router,
private driversvc: DriverService


  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.driversvc.get(this.id).subscribe(
      res => { console.log(res); this.driver = res;},
      err => {console.error(err)}
    )
  }

  save(): void {
    this.driver.id = +this.driver.id;
    console.debug("B4", this.driver);
    this.driversvc.change(this.driver).subscribe(
     res => {console.log("Driver Created"); this.router.navigateByUrl("driver/list");},
     err => {console.error(err)});
  }  

}
