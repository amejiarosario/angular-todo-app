import { Injectable } from '@angular/core';

let todos = [
  { _id: 1, title: 'Install Angular CLI', isDone: true },
  { _id: 2, title: 'Style app', isDone: true },
  { _id: 3, title: 'Finish service functionality', isDone: false },
  { _id: 4, title: 'Setup API', isDone: false },
];

@Injectable()
export class TodoService {

  constructor() { }

  get(){
    return new Promise(resolve => resolve(todos));
  }

  add(data) {
    return new Promise(resolve => {
      todos.push(data);
      resolve(data);
    });
  }

  put(data) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === data._id);
      todos[index].title = data.title;
      resolve(data);
    });
  }

  delete(id) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === id);
      todos.splice(index, 1);
      resolve(true);
    });
  }
}
