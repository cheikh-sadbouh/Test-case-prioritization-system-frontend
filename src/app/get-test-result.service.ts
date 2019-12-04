import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GetTestResultService {

  constructor(private http: HttpClient) { }
  getTestResult(): Observable<any> {
    return  this.http.get('//localhost:4444/getTestResult');
  }
  getTeststatus():  Observable<Array<any>> {
    return this.http.get<Array<any>>("//localhost:4444/getstatus");


  }



}
