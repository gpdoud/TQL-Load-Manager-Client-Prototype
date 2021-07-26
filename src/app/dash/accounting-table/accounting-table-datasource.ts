import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface AccountingTableItem {
  poNumber: number;
  sentToAcct: string;
  daysAging: number;
  amountBilled: number;
  amountPaid: number;
  amountDue: number;
  acctingNotes: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: AccountingTableItem[] = [
  { poNumber:12022573, sentToAcct:' 2021-06-02 00:00' ,daysAging:51, amountBilled:1800, amountPaid:1500, amountDue:300, acctingNotes: 'Short Pay'},
  { poNumber:13458207, sentToAcct:' 2021-06-09 00:00' ,daysAging:44, amountBilled:5500, amountPaid:5000, amountDue:500, acctingNotes: 'Short Pay'},
  { poNumber:15131596, sentToAcct:' 2021-06-11 00:00' ,daysAging:42, amountBilled:7600, amountPaid:7200, amountDue:400, acctingNotes: 'Short Pay'},
  { poNumber:15357820, sentToAcct:' 2021-06-13 00:00' ,daysAging:40, amountBilled:800, amountPaid:800, amountDue:0, acctingNotes: 'In Process'},
  { poNumber:15396118, sentToAcct:' 2021-06-15 00:00' ,daysAging:38, amountBilled:4100, amountPaid:410, amountDue:3690, acctingNotes: 'Short Pay'},
  { poNumber:15463163, sentToAcct:' 2021-06-17 00:00' ,daysAging:36, amountBilled:6566, amountPaid:6566, amountDue:0, acctingNotes: 'In Process'},
  { poNumber:15541263, sentToAcct:' 2021-06-19 00:00' ,daysAging:34, amountBilled:970, amountPaid:970, amountDue:0, acctingNotes: 'In Process'},
  { poNumber:15577842, sentToAcct:' 2021-06-21 00:00' ,daysAging:32, amountBilled:1700, amountPaid:0, amountDue:1700, acctingNotes: 'Carrier Pwk needed'},
  { poNumber:15637171, sentToAcct:' 2021-07-16 00:00' ,daysAging:7, amountBilled:2500, amountPaid:0, amountDue:2500, acctingNotes: 'Carrier Pwk needed'},
  { poNumber:15641955, sentToAcct:' 2021-07-18 00:00' ,daysAging:5, amountBilled:3600, amountPaid:0, amountDue:3600, acctingNotes: 'Carrier Pwk needed'},
  { poNumber:15676683, sentToAcct:' 2021-07-20 00:00' ,daysAging:3, amountBilled:1750, amountPaid:0, amountDue:1750, acctingNotes: 'Carrier Pwk needed'},
  { poNumber:15703686, sentToAcct:' 2021-07-22 00:00' ,daysAging:1, amountBilled:3100, amountPaid:0, amountDue:3100, acctingNotes: 'Carrier Pwk needed'}
];

/**
 * Data source for the AccountingTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AccountingTableDataSource extends DataSource<AccountingTableItem> {
  data: AccountingTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<AccountingTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: AccountingTableItem[]): AccountingTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: AccountingTableItem[]): AccountingTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'poNumber': return compare(+a.poNumber, +b.poNumber, isAsc);
        case 'sentToAcct': return compare(a.sentToAcct, b.sentToAcct, isAsc);
        case 'daysAging': return compare(a.daysAging, b.daysAging, isAsc);
        case 'amountBilled': return compare(a.amountBilled, b.amountBilled, isAsc);
        case 'amountPaid': return compare(a.amountPaid, b.amountPaid, isAsc);
        case 'amountDue': return compare(a.amountDue, b.amountDue, isAsc);
        case 'acctingNotes': return compare(a.acctingNotes, b.acctingNotes, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
