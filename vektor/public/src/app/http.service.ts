import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    console.log('Spin up complete');
  }

  getCourses(){
    console.log('Acquiring courses');
    return this._http.get('/api/courses');
  }
}
