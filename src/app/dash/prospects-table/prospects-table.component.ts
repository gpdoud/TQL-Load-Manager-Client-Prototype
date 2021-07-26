import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProspectsTableDataSource, ProspectsTableItem } from './prospects-table-datasource';

@Component({
  selector: 'app-prospects-table',
  templateUrl: './prospects-table.component.html',
  styleUrls: ['./prospects-table.component.css']
})
export class ProspectsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProspectsTableItem>;
  dataSource: ProspectsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [   
    //  'id',
  'name',
  'code',
  'address',
  'city',
  'state',
  'zip',];

  constructor() {
    this.dataSource = new ProspectsTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
