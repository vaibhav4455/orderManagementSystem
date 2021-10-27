import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Addorder } from '../models/addorder';
const headerData={headers: {'Content-Type': 'application/json'}}

@Injectable({
  providedIn: 'root'
})
export class AddorderService {

  api: string = '/api/addorder'
  private baseUrl = "http://localhost:9001/api/add";
  constructor(private httpClient: HttpClient, private router: Router) { }
  addorder(addorder: Addorder): Observable<any>{
    console.log(addorder);
    return this.httpClient.post(this.api,addorder)
  }
}
