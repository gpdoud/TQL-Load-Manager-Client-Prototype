import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {baseurl: string = "http://localhost:7400/api/customers"

  constructor(
    private http: HttpClient
  ) { }
list(): Observable<Customer[]> {
  return this.http.get(`${this.baseurl}`) as Observable<Customer[]>;
}
get(id: number): Observable<Customer>{
  return this.http.get(`${this.baseurl}/${id}`) as Observable<Customer>;
}
create(cust: Customer): Observable<Customer>{
  return this.http.post(`${this.baseurl}`,cust) as Observable<Customer>;
}
change(cust: Customer): Observable<any>{
return this.http.put(`${this.baseurl}/${cust.id}`, cust) as Observable<any>;
}
remove(cust: Customer): Observable<Customer>{
  return this.http.delete(`${this.baseurl}/${cust.id}`) as Observable<Customer>;
}

}
