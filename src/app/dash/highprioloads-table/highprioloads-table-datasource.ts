import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface HighprioloadsTableItem {
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
const EXAMPLE_DATA: HighprioloadsTableItem[] = [
  
  { poNumber:15754649, customerCode: 'COAS', amtBilled:3000, payTruckAmt:3492.72, pickupLoc: 'LOGANS INN', pickupDate: '2021-07-20 00:00', deliveryLoc: 'SABOL & RICE INC.', deliveryDate: '2021-07-23 00:00', status: 'HIGH PRIORITY'},
  { poNumber:15867907, customerCode: 'DYNA', amtBilled:3000, payTruckAmt:3500, pickupLoc: 'Wilbert Burial Vault', pickupDate: '2021-07-22 00:00', deliveryLoc: 'BLUE BUFFALO', deliveryDate: '2021-07-25 00:00', status: 'HIGH PRIORITY'},
  { poNumber:15912349, customerCode: 'TRAI', amtBilled:1000, payTruckAmt:1225, pickupLoc: 'ATLANTA PLASTIC INJECTION MOLDING', pickupDate: '2021-07-24 00:00', deliveryLoc: 'KROGER', deliveryDate: '2021-07-27 00:00', status: 'HIGH PRIORITY'},
  { poNumber:15637171, customerCode: 'DSV ', amtBilled:2200, payTruckAmt:2500, pickupLoc: 'IRWINDALE WAREHOUSE', pickupDate: '2021-07-12 00:00', deliveryLoc: 'SOLO STOVE', deliveryDate: '2021-07-15 00:00', status: 'HIGH PRIORITY'},
  { poNumber:15641955, customerCode: 'QBFO', amtBilled:3200, payTruckAmt:3600, pickupLoc: 'OCONEE SAND AND GRAVEL', pickupDate: '2021-07-14 00:00', deliveryLoc: 'INTERNATIONAL WHOLESALE', deliveryDate: '2021-07-17 00:00', status: 'HIGH PRIORITY'},
  { poNumber:15676683, customerCode: 'OCON', amtBilled:1500, payTruckAmt:1750, pickupLoc: 'AMERICAN YEAST', pickupDate: '2021-07-16 00:00', deliveryLoc: 'CORONA, CA', deliveryDate: '2021-07-19 00:00', status: 'HIGH PRIORITY'},
  { poNumber:15703686, customerCode: 'AMER', amtBilled:2700, payTruckAmt:3100, pickupLoc: 'American Warehouse', pickupDate: '2021-07-18 00:00', deliveryLoc: 'MURPHY TOMATOES DFW', deliveryDate: '2021-07-21 00:00', status: 'HIGH PRIORITY'},
  { poNumber:15950184, customerCode: 'JOFR', amtBilled:1300, payTruckAmt:1500, pickupLoc: 'FRESH VEGETABLES', pickupDate: '2021-08-01 00:00', deliveryLoc: 'MURPHY TOMATOES DFW', deliveryDate: '2021-08-04 00:00', status: 'HIGH PRIORITY'},
  { poNumber:15960660, customerCode: 'BRAN', amtBilled:1075, payTruckAmt:1250, pickupLoc: 'RIVER CITY EQUIPMENT', pickupDate: '2021-08-03 00:00', deliveryLoc: 'SABOL & RICE INC.', deliveryDate: '2021-08-06 00:00', status: 'HIGH PRIORITY'}
 ];

/**
 * Data source for the HighprioloadsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class HighprioloadsTableDataSource extends DataSource<HighprioloadsTableItem> {
  data: HighprioloadsTableItem[] = EXAMPLE_DATA;
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
  connect(): Observable<HighprioloadsTableItem[]> {
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
  private getPagedData(data: HighprioloadsTableItem[]): HighprioloadsTableItem[] {
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
  private getSortedData(data: HighprioloadsTableItem[]): HighprioloadsTableItem[] {
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
