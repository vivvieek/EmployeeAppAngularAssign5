import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {

  constructor(public http:HttpClient) { }

  getemployeedata(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

}
