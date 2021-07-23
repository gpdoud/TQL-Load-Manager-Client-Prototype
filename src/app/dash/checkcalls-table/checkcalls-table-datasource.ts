import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface CheckcallsTableItem {
  poNumber: number;
  customerCode: string;
  amtBilled: number;
  payTruckAmt: number;
  pickupLoc: string;
  pickupDate: string;
  deliveryLoc: string;
  deliveryDate: string;
  status: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: CheckcallsTableItem[] = [
  { poNumber:12022573, customerCode: 'MURP', amtBilled:1500, payTruckAmt:1800, pickupLoc: 'MURPHY TOMATOES DFW', pickupDate: '2021-05-29 00:00', deliveryLoc: 'RIVER CITY EQUIPMENT', deliveryDate: '2021-06-01 00:00', status: 'WTUL'},
  { poNumber:13458207, customerCode: 'COAS', amtBilled:4950, payTruckAmt:5500, pickupLoc: 'CORONA, CA', pickupDate: '2021-06-05 00:00', deliveryLoc: 'FRESH VEGETABLES', deliveryDate: '2021-06-08 00:00', status: 'WTUL'},
  { poNumber:15131596, customerCode: 'SABO', amtBilled:6500, payTruckAmt:7600, pickupLoc: 'SABOL & RICE INC. ', pickupDate: '2021-06-07 00:00', deliveryLoc: 'TXDOT ENNIS, TX', deliveryDate: '2021-06-10 00:00', status: 'WTL'},
  { poNumber:15357820, customerCode: 'TRAI', amtBilled:100, payTruckAmt:800, pickupLoc: 'ABSOLUTE HONEY', pickupDate: '2021-06-09 00:00', deliveryLoc: 'BRANDT CONSOLIDATED, INC.', deliveryDate: '2021-06-12 00:00', status: ''},
  { poNumber:15396118, customerCode: 'JAEM', amtBilled:3800, payTruckAmt:4100, pickupLoc: 'BLUE BUFFALO', pickupDate: '2021-06-11 00:00', deliveryLoc: 'ATLANTA PLASTIC INJECTION MOLDING', deliveryDate: '2021-06-14 00:00', status: 'WTL'},
  { poNumber:15463163, customerCode: 'IPSI', amtBilled:5100, payTruckAmt:6566, pickupLoc: 'KROGER', pickupDate: '2021-06-13 00:00', deliveryLoc: 'American Warehouse', deliveryDate: '2021-06-16 00:00', status: ''},
  { poNumber:15541263, customerCode: 'HUDS', amtBilled:425, payTruckAmt:970, pickupLoc: 'INTERNATIONAL WHOLESALE', pickupDate: '2021-06-15 00:00', deliveryLoc: 'AMERICAN YEAST', deliveryDate: '2021-06-18 00:00', status: ''},
  { poNumber:15577842, customerCode: 'PLAS', amtBilled:1450, payTruckAmt:1700, pickupLoc: 'SOLO STOVE', pickupDate: '2021-06-17 00:00', deliveryLoc: 'OCONEE SAND AND GRAVEL', deliveryDate: '2021-06-20 00:00', status: 'WTUL'},
  { poNumber:15929666, customerCode: 'JAEM', amtBilled:1775, payTruckAmt:2200, pickupLoc: 'TXDOT ROCKWALL, TX', pickupDate: '2021-07-26 00:00', deliveryLoc: 'ABSOLUTE HONEY', deliveryDate: '2021-07-29 00:00', status: 'OTR'},
  { poNumber:15934521, customerCode: 'IPSI', amtBilled:900, payTruckAmt:1200, pickupLoc: 'BRANDT CONSOLIDATED, INC.', pickupDate: '2021-07-28 00:00', deliveryLoc: 'IRWINDALE WAREHOUSE', deliveryDate: '2021-07-31 00:00', status: 'OTR'},
  
];

/**
 * Data source for the CheckcallsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CheckcallsTableDataSource extends DataSource<CheckcallsTableItem> {
  data: CheckcallsTableItem[] = EXAMPLE_DATA;
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
  connect(): Observable<CheckcallsTableItem[]> {
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
  private getPagedData(data: CheckcallsTableItem[]): CheckcallsTableItem[] {
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
  private getSortedData(data: CheckcallsTableItem[]): CheckcallsTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'poNumber': return compare(+a.poNumber, +b.poNumber, isAsc);
        case 'customerCode': return compare(+a.customerCode, +b.customerCode, isAsc);
        case 'amtBilled': return compare(+a.amtBilled, +b.amtBilled, isAsc);
        case 'payTruckAmt': return compare(+a.payTruckAmt, +b.payTruckAmt, isAsc);
        case 'pickupLoc': return compare(+a.pickupLoc, +b.pickupLoc, isAsc);
        case 'pickupDate': return compare(+a.pickupDate, +b.pickupDate, isAsc);
        case 'deliveryLoc': return compare(+a.deliveryLoc, +b.deliveryLoc, isAsc);
        case 'deliveryDate': return compare(+a.deliveryDate, +b.deliveryDate, isAsc);
        case 'status': return compare(+a.status, +b.status, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
