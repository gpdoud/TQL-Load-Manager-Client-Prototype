import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver.class';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  drivers: Driver[] = [];

  searchCriteria: string="";
  sortColumn: string ="id";
  sortAsc: boolean = true;
  sortFn(column: string): void {
    if (column === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }

  constructor(
    private driversvc: DriverService
    
    
  ) { }

  ngOnInit(): void {
    this.driversvc.list().subscribe(
      res => {
        console.log("Driver:", res);
        this.drivers = res;
      },
      err => {console.error(err);}
    );
  }

}
