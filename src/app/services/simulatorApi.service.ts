import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment';

@Injectable({
  providedIn: 'root'
})

export class SimulatorApiService {

  tasks: Assignment[] = [];

  constructor() { }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

}
