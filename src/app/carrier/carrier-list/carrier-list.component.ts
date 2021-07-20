import { Component, OnInit } from '@angular/core';
import { Carrier } from '../carrier';
import { CarrierService } from '../carrier.service';

@Component({
  selector: 'app-carrier-list',
  templateUrl: './carrier-list.component.html',
  styleUrls: ['./carrier-list.component.css']
})
export class CarrierListComponent implements OnInit {

  carriers: Carrier [] = [];

  searchCriteria: string = "";
  sortColumn: string = "id";
  sortAsc: boolean = true;
  sortFn(column: string): void {
    if (column === this.sortColumn){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }

  constructor(
    private carriersvc: CarrierService
  ) { }

  ngOnInit(): void {
    this.carriersvc.list().subscribe(
      res => {
        console.log("Carriers:", res);
        this.carriers = res;
      },
      err => {console.error(err);}
    );
  }

}
