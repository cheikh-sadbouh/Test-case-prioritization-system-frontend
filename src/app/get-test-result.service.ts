import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTestResultService {

  constructor(private http: HttpClient) { }
  getTestResult(): Observable<any> {
    return  this.http.get('//localhost:4444/getTestResult');
  }
}
