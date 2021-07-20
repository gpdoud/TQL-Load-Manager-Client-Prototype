import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrier } from './carrier.class';

@Injectable({
  providedIn: 'root'
})
export class CarrierService { baseurl: string = "http://localhost:7400/api/carriers"

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Carrier[]>{
    return this.http.get(`${this.baseurl}`) as Observable<Carrier[]>;
  }

  get(id: number): Observable<Carrier> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Carrier>;
  }

  create(carrier: Carrier): Observable<Carrier>{
    return this.http.post(`${this.baseurl}`, carrier) as Observable<Carrier>;
  }

  change(carrier: Carrier): Observable<any> {
    return this.http.put(`${this.baseurl}/${carrier.id}`, carrier) as Observable<any>;
  }

  remove(id: number): Observable<Carrier>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Carrier>;
  }








}
