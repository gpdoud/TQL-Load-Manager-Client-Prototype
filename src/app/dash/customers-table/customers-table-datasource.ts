import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface CustomersTableItem {
  name: string;
  id: number;
  code: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  status: boolean;
  userId: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: CustomersTableItem[] = [
  {id: 0, name: 'Murphy Tomatoes (Dallas)',       code: 'MURP',     address: '1184 113th st',                 city: 'Grand Prairie',        state: 'TX',   zip: '75050',    status: true,  userId: 1},
  {id: 1, name: 'Coast To Coast Equipment',       code: 'COAS',     address: '4800 Ruffini Court SE',         city: 'Cleveland',            state: 'OH',   zip: '44105',    status: true,  userId: 2},
  {id: 2, name: 'Sabol and Rice Inc',             code: 'SABO',     address:  'PO Box 25957',                 city: 'Salt Lake City',       state: 'UT',   zip: '84125',    status: true,  userId: 3},
  {id: 3, name: 'TRAILER SOURCE, INC',            code: 'TRAI',     address: '14007 131ST ST E',              city: 'Orting',               state: 'WA',   zip: '98360',    status: true,  userId: 1},
  {id: 4, name: 'JAEMAR SALES',                   code: 'JAEM',     address: '5939 Darwin Court, Suite 106',  city: 'Carlsbad',             state: 'CA',   zip: '92008',    status: true,  userId: 2},
  {id: 5, name: 'IPS Industries',                 code: 'IPS ',     address: '12641 166th St',                city: 'Cerritos',             state: 'CA',   zip: '90703',    status: true,  userId: 4},
  {id: 6, name: 'Hudson Valley Farms (QC)',       code: 'HUDS',     address: '69-228 Rue Principale',         city: 'St-Louis-De-Gonzague', state: 'QC',   zip: 'J0S 1T0',  status: true,  userId: 5},
  {id: 7, name: 'PLASTIRUN CORP',                 code: 'PLAS',     address: '70 B Emjay Blvd',               city: 'Brentwood',            state: 'NY',   zip: '11717',    status: true,  userId: 2},
  {id: 8, name: 'DSV AIR & SEA INC (SLC)',        code: 'DSV ',     address: '1545 S 4800 W',                 city: 'Salt Lake City',       state: 'UT',   zip: '84104',    status: true,  userId: 6},
  {id: 9, name: 'Q & B FOODS',                    code: 'Q & ',     address: '15547 First Street',            city: 'Irwindale',            state: 'CA',   zip: '91706',    status: true,  userId: 7},
  {id: 10, name: 'OCONEE SAND AND GRAVEL',        code: 'OCON',     address: '797 harmony rd',                city: 'Eatonton',             state: 'GA',   zip: '31024',    status: true,  userId: 8},
  // {id: 11, name: 'AMERICAN YEAST SALES INC',      code: 'AMER',     address: '331 Commerce Way, STE 2',       city: 'Pembroke',             state: 'NH',   zip: '3275',     status: true,  userId: 9},
  // {id: 12, name: 'DYNASOL LLC',                   code: 'DYNA',     address: '14340 Torrey Chase Blvd',       city: 'Houston',              state: 'TX',   zip: '77014',    status: true,  userId: 10},
  // {id: 13, name: 'Asset Store LLC',               code: 'ASSE',     address: '2811 Sisson St',                city: 'Baltimore',            state: 'MD',   zip: '21211',    status: true,  userId: 9},
  // {id: 14, name: 'WILBERT FUNERAL SERVICES',      code: 'WILB',     address: '2913 Gardner Rd',               city: 'Broadview',            state: 'IL',   zip: '60155',    status: true,  userId: 5},
  // {id: 15, name: 'PLASTICS EXCHANGE',             code: 'PLAS',     address: '28230 N. 69th St.',             city: 'Scottsdale',           state: 'AZ',   zip: '85266',    status: true,  userId: 6},
  // {id: 16, name: 'SOUTHEAST ENVIROTX',            code: 'SOUT',     address: '8725 CALERA DRIVE',             city: 'Austin',               state: 'TX',   zip: '78735',    status: true,  userId: 9},
  // {id: 17, name: 'BRANDT CONSOLIDATED (FRESNO)',  code: 'BRAN',     address: 'PO Box 3500',                   city: 'Fresno',               state: 'CA',   zip: '93745',    status: true,  userId: 4},
  // {id: 18, name: 'JOFRAN INC',                    code: 'JOFR',     address: 'One Jofran Way',                city: 'Norfolk',              state: 'MA',   zip: '2056',     status: true,  userId: 1},
  // {id: 19, name: 'SOUTHEAST ENVIROTX',            code: 'SOUT',     address: '8725 CALERA DRIVE',             city: 'Austin',               state: 'TX',   zip: '78735',    status: true,  userId: 8}
];

/**
 * Data source for the CustomersTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CustomersTableDataSource extends DataSource<CustomersTableItem> {
  data: CustomersTableItem[] = EXAMPLE_DATA;
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
  connect(): Observable<CustomersTableItem[]> {
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
  private getPagedData(data: CustomersTableItem[]): CustomersTableItem[] {
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
  private getSortedData(data: CustomersTableItem[]): CustomersTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'code': return compare(+a.code, +b.code, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
