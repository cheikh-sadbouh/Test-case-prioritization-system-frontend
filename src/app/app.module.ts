import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestResultComponent } from './test-result/test-result.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { UploadComponent } from './upload/upload.component';
import { PackagesComponent } from './packages/packages.component';
import { FixuploadComponent } from './fixupload/fixupload.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {FormsModule} from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';


@NgModule({
  declarations: [
    AppComponent,
    TestResultComponent,
    UploadComponent,
    PackagesComponent,
    FixuploadComponent,
    CheckboxComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'testResult',
        component: TestResultComponent
      },
      {
        path: 'main',
        component: MainpageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
