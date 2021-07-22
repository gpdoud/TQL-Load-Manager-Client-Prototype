import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Load } from './load.class';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  baseurl: string = "http://localhost:7400/api/users"
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Load[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Load[]>;
  }
  get(id: number): Observable<Load> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Load>;
  }
  create(load: Load): Observable<Load> {
    return this.http.post(`${this.baseurl}`, load) as Observable<Load>;
  }
  change(load: Load): Observable<any> {
    return this.http.put(`${this.baseurl}/${load.id}`, load) as Observable<any>;
  }
  remove(load: Load): Observable<Load> {
    return this.http.delete(`${this.baseurl}/${load.id}`) as Observable<Load>;
  }
}
