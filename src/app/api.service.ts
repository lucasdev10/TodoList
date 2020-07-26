import { Injectable } from '@angular/core';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public id:number;
  public nome:string;
  public status:boolean;

  todos: Todo[] = []

  constructor() { }

  atualizar(){
    return this.todos
  }

}
