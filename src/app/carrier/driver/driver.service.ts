import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from './driver.class';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  baseurl: string = "http://localhost:7400/api/drivers"

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Driver[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Driver[]>;
  }

  get(id: number): Observable<Driver> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Driver>;
  }

  create(driver: Driver): Observable<Driver> {
    return this.http.post(`${this.baseurl}`, driver) as Observable<Driver>;
  }

  change(driver: Driver): Observable<any> {
    return this.http.put(`${this.baseurl}/${driver.id}`, driver) as Observable<any>;
  }

  remove(id: number): Observable<Driver> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Driver>;
  }
}
