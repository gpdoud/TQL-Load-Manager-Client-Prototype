import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { HighprioloadsTableDataSource, HighprioloadsTableItem } from './highprioloads-table-datasource';

@Component({
  selector: 'app-highprioloads-table',
  templateUrl: './highprioloads-table.component.html',
  styleUrls: ['./highprioloads-table.component.css']
})
export class HighprioloadsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<HighprioloadsTableItem>;
  dataSource: HighprioloadsTableDataSource;

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
    'status'
  ];

  constructor() {
    this.dataSource = new HighprioloadsTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
