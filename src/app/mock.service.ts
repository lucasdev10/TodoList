import { Injectable, OnInit } from '@angular/core';
import { Todo } from './models/todo';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  todos: Todo[] = []

  constructor() { }

  // ngOnInit(){
  //   this.todos = this.getData('tarefas');
  // }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

}
