import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AccountingTableDataSource, AccountingTableItem } from './accounting-table-datasource';

@Component({
  selector: 'app-accounting-table',
  templateUrl: './accounting-table.component.html',
  styleUrls: ['./accounting-table.component.css']
})
export class AccountingTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AccountingTableItem>;
  dataSource: AccountingTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'poNumber',
    'sentToAcct',
    'daysAging',
    'amountBilled',
    'amountPaid',
    'amountDue',
    'acctingNotes'
  ];

  constructor() {
    this.dataSource = new AccountingTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
