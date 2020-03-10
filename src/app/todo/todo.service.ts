import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

let TODOS = [
  { title: 'Install Angular CLI', isDone: true },
  { title: 'Style app', isDone: true },
  { title: 'Finish service functionality', isDone: false },
  { title: 'Setup API', isDone: false },
];

const API = '/api/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  get(params = {}) {
    return this.http.get(API, { params });
  }

  add(data) {
    return this.http.post(API, data);
  }

  put(changed) {
    return this.http.put(`${API}/${changed._id}`, changed);
  }

  toggle(selected) {
    selected.isDone = !selected.isDone;
    return this.put(selected);
  }

  delete(selected) {
    return this.http.delete(`${API}/${selected._id}`);
  }

  deleteCompleted() {
    return new Observable(subscriber => {
      TODOS = TODOS.filter(todo => !todo.isDone);
      subscriber.next(TODOS);
    });
  }
}
