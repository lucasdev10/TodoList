import { Injectable } from '@angular/core';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  todos: Todo[] = []

  constructor() { }



}
