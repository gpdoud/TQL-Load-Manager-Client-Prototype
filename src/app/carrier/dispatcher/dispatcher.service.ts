import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dispatcher } from './dispatcher.class';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {
  baseurl: string = "http://localhost:7400/api/dispatchers"

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Dispatcher[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Dispatcher[]>
  }

  get(id: number): Observable<Dispatcher> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Dispatcher>;
  }

  create(dispatcher: Dispatcher): Observable<Dispatcher> {
    return this.http.post(`${this.baseurl}`, dispatcher) as Observable<Dispatcher>;
  }

  change(dispatcher: Dispatcher): Observable<any> {
    return this.http.put(`${this.baseurl}/${dispatcher.id}`, dispatcher) as Observable<any>;
  }

  remove(id: number): Observable<Dispatcher> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Dispatcher>;
  }


}
