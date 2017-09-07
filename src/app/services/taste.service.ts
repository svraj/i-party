import { Injectable } from '@angular/core';
import { Taste } from './../models/Taste';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TasteService {

  private baseUrl:string;
  //private http:Http;

  constructor(public http:Http) {
    this.baseUrl = "http://localhost:1235/party-planner/tastes/";
   }

   public getTastes() :Observable<Taste[]>{
      return this.http.get(this.baseUrl+"/all")
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     
   }

    getTastesNew(){
    return this.http.get(this.baseUrl)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getTaste(id){
    return this.http.get(this.getTasteUrl(id))
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addTaste(taste){
    return this.http.post(this.baseUrl, JSON.stringify(taste))
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateTaste(taste){
    return this.http.put(this.getTasteUrl(taste.id), JSON.stringify(taste))
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteTaste(id){
    return this.http.delete(this.getTasteUrl(id))
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  private getTasteUrl(id){
    return this.baseUrl + "/" + id;
  }

}
