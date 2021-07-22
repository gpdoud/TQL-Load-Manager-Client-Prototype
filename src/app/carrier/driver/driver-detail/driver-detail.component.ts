import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../driver.class';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit {

  driver!: Driver;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private driversvc: DriverService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.driversvc.get(this.id).subscribe(
      res => { console.log(res); this.driver = res; },
      err => { console.log(err) }
    )
  }


  deleteDriver() {
    this.id = this.route.snapshot.params.id
    this.driversvc.remove(this.id).subscribe(
      res => { console.log("Driver successfully removed:", res); this.driver = res; this.router.navigateByUrl("/carrier/detail/{{c.id}}"); },
      err => { console.error(err) })
  };




}
