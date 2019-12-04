import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetTestResultService} from '../get-test-result.service';
import {delay, timeout} from "rxjs/operators";

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})

export class TestResultComponent implements OnInit {
// @ts-ignore
  private  restdata: Array<any> = [];
  Object = Object;

  constructor( private  testresult: GetTestResultService ) { }

  isDataAvailable = false;

  ngOnInit() {
   this.testresult.getTestResult().subscribe(
      data => {

               console.log(data);
               this.getdata();
      },
      err => console.error(err),
      () => console.log('done')
    );
  }
   time =0;
  showActions: true;
    getdata(){

    const   delay = setTimeout(() => {
        console.log('do some action!');

        this.testresult.getTeststatus().subscribe(
          (data: any) => {
          // @ts-ignore
         //   this.restdata = JSON.parse(data);
            console.log("returned data :"+ data);
        this.restdata = data ;

            console.log("returned restdata : ***** :"+ this.restdata);
              console.log("call it again");

              this.getdata();

            clearTimeout(delay);

          },
          err => console.error(err),
          () => console.log('returend data done !')
        );
      }, 6000);


  }
   sleep(seconds)
  {
    var e = new Date().getTime() + (seconds * 120000);
    while (new Date().getTime() <= e) {}
  }
}
