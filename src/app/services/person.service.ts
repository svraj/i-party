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
    this.baseUrl = "http://localhost:1235/party-planner/persons/all";
   }

   public getPersons() :Observable<Person[]>{
      return this.http.get(this.baseUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     
   }

   getPersonsNew(){
    return this.http.get(this.baseUrl)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPerson(id){
    return this.http.get(this.getPersonUrl(id))
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addPerson(taste){
    return this.http.post(this.baseUrl, JSON.stringify(taste))
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updatePerson(taste){
    return this.http.put(this.getPersonUrl(taste.id), JSON.stringify(taste))
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deletePerson(id){
    return this.http.delete(this.getPersonUrl(id))
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  private getPersonUrl(id){
    return this.baseUrl + "/" + id;
  }

}
