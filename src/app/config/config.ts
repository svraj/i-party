import { Injectable } from '@angular/core';


@Injectable()
 export class Config {

 private _config: Object
 private _env: Object

 //constructor(private http: Http) {
 //}

 load() {
   // json files will be loaded here
 }

 getEnv(key: any) {
   return this._env[key];
 }

 get(key: any) {
   return this._config[key];
 }

};