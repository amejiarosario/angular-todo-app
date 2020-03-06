import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

let TODOS = [
  { title: 'Install Angular CLI', isDone: true },
  { title: 'Style app', isDone: true },
  { title: 'Finish service functionality', isDone: false },
  { title: 'Setup API', isDone: false },
];

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  get(query = '') {
    return this.http.get('/api/todos');
  }

  add(data) {
    return new Observable(subscriber => {
      TODOS.push(data);
      subscriber.next(data);
    });
  }

  put(changed) {
    return new Observable(subscriber => {
      const index = TODOS.findIndex(todo => todo === changed);
      TODOS[index].title = changed.title;
      subscriber.next(changed);
    });
  }

  delete(selected) {
    return new Observable(subscriber => {
      const index = TODOS.findIndex(todo => todo === selected);
      TODOS.splice(index, 1);
      subscriber.next(true);
    });
  }

  deleteCompleted() {
    return new Observable(subscriber => {
      TODOS = TODOS.filter(todo => !todo.isDone);
      subscriber.next(TODOS);
    });
  }

  toggle(selected) {
    selected.isDone = !selected.isDone;
    return new Observable(subscriber => subscriber.complete());
  }
}
