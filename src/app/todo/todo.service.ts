import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ITodo {
  _id?: string;
  title: string;
  isDone: boolean;
  notes: string;
  update_at: string;
  editing ?: boolean;
}

const API = '/api/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  get(params = {}) {
    return this.http.get(API, { params });
  }

  add(data: ITodo) {
    return this.http.post(API, data);
  }

  put(changed: ITodo) {
    return this.http.put(`${API}/${changed._id}`, changed);
  }

  toggle(selected: ITodo) {
    selected.isDone = !selected.isDone;
    return this.put(selected);
  }

  delete(selected: ITodo) {
    return this.http.delete(`${API}/${selected._id}`);
  }

  deleteCompleted(body = { isDone: true }) {
    return this.http.request('delete', `${API}`, { body });
  }
}
