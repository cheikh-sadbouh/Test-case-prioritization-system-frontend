import { Component, OnInit } from '@angular/core';
import {UploadFileServiceService} from '../upload-file-service.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from "./User";


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
// tslint:disable-next-line:component-class-suffix

export class CheckboxComponent implements OnInit {

   user : User = new User (
  false,
  false,
   false,
 false
);





  constructor(private uploadService: UploadFileServiceService,
              private router: Router) { }

  ngOnInit() {
  }
  change() {
  console.log(this.user);
  }
  submit() {

   // @ts-ignore

    this.uploadService.submitoption(this.user).subscribe(event => {
       if (event instanceof HttpResponse) {

        console.log('options have been sent!' + event.ok);
        console.log('obj : ' + this.user);
        if (event.ok) {
          this.router.navigate(['/testResult']);
        }
       }
    });
  }

}
