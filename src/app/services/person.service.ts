import { Person } from './../models/Person';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PersonService {

  private baseUrl:string;
  //private http:Http;

  constructor(public http:Http) {
    this.baseUrl = "http://localhost:1235/party-planner/persons";
   }

   public getPersons() :Observable<Person[]>{
      return this.http.get(this.baseUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     
   }

}
