import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './models/todo';
 
const apiUrl = "";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public id:number;
  public nome:string;
  public status:boolean;

  constructor(private http: HttpClient) { }
    // getApi() {
    //   return this.http.get(apiUrl);
    // }
  

    // getWeather(cityOrZip, searchValue): Observable<Model[]>{
    //   return this.apiUrl.get<Model[]>(this.baseUrl+`${cityOrZip}${searchValue}&${this.key}`)
    // }
}
