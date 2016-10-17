import { Injectable } from '@angular/core';

let todos = [
  { title: 'Install Angular CLI', isDone: true },
  { title: 'Style app', isDone: true },
  { title: 'Finish service functionality', isDone: false },
  { title: 'Setup API', isDone: false },
];

@Injectable()
export class TodoService {

  constructor() { }

  get(){
    return new Promise(resolve => resolve(todos));
  }

}
