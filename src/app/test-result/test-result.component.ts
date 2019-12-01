import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetTestResultService} from '../get-test-result.service';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})
export class TestResultComponent implements OnInit {
// @ts-ignore
  private  restdata: Map<any, any>;
  constructor( private  testresult: GetTestResultService ) { }

  isDataAvailable = false;

  ngOnInit() {
    this.testresult.getTestResult().subscribe(
      data => {
               this.restdata = data;
               console.log(data);
      },
      err => console.error(err),
      () => console.log('done')
    );
  }

}
