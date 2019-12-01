import {Component, OnInit} from '@angular/core';
import {UploadComponent} from './upload/upload.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testing-front';
  constructor(private router: Router) {
    this.router.navigate(['/main']);
  }
  ngOnInit(): void {
  }

}
