import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CheckcallsTableDataSource, CheckcallsTableItem } from './checkcalls-table-datasource';

@Component({
  selector: 'app-checkcalls-table',
  templateUrl: './checkcalls-table.component.html',
  styleUrls: ['./checkcalls-table.component.css']
})
export class CheckcallsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CheckcallsTableItem>;
  dataSource: CheckcallsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [    
    'poNumber',
  'customerCode',
  // 'amtBilled',
  // 'payTruckAmt',
  'pickupLoc',
  // 'pickupDate',
  'deliveryLoc',
  // 'deliveryDate',
  'status'];

  constructor() {
    this.dataSource = new CheckcallsTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
