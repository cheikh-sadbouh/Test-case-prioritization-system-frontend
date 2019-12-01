import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileServiceService {
  public formdata = new FormData();
  constructor(private http: HttpClient) {}

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    this.resetform();
    this.formdata.append('file', file);


    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache'
      })
    };

    const req = new HttpRequest('POST', '//localhost:4444/post', this.formdata, {
      reportProgress: true,
      responseType: 'text',
      headers: httpOptions.headers

    });

    return this.http.request(req);
  }
resetform() {
    this.formdata = new FormData();
  }
// tslint:disable-next-line:variable-name
submitoption(options: any): Observable<HttpEvent<{}>> {

  const httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache'
    })
  };

  const req = new HttpRequest('POST', '//localhost:4444/getoption', options, {
    reportProgress: true,
    responseType: 'text',
    headers: httpOptions.headers

  });

  return this.http.request(req);
}
}


