import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shed } from './shed.class';

const baseurl = "http://localhost:7400/api/Sheds"

@Injectable({
  providedIn: 'root'
})
export class ShedService {

  constructor(
    private http : HttpClient
  ) { }
  
  list(): Observable<Shed[]> {
    return this.http.get(`${baseurl}`) as Observable<Shed[]>;
  }
  get(id: number): Observable<Shed> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Shed>;
  }
  create(shed: Shed): Observable<Shed> {
    return this.http.post(`${baseurl}`, shed) as Observable<Shed>;
  }
  update(shed: Shed): Observable<any>{
    return this.http.put(`${baseurl}/${shed.id}`, shed) as Observable<any>;
  }
  delete(id: number): Observable<Shed>{
    return this.http.delete(`${baseurl}/${id}`) as Observable<Shed>;
  }
}
