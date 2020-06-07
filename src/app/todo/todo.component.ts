import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService, ITodo } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  public todos: ITodo[];
  public activeTasks: number;
  public newTodo: string;
  public path: string;
  public mapToQuery = {
    all: {},
    active: { isDone: false },
    completed: { isDone: true },
  };
  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params.status;
      this.getTodos(this.path);
    });
  }

  addTodo() {
    this.todoService
      .add({ title: this.newTodo, isDone: false } as unknown as ITodo)
      .subscribe(() => {
        this.getTodos();
        this.newTodo = ''; // clear input form value
      });
  }

  getTodos(route = 'all') {
    const query = this.mapToQuery[route];
    return this.todoService
      .get(query)
      .subscribe((todos: ITodo[]) => {
        this.todos = todos;
        this.activeTasks = this.todos.filter(todo => !todo.isDone).length;
      });
  }

  updateTodo(todo: ITodo, newValue: string) {
    todo.title = newValue;
    return this.todoService.put(todo).subscribe(() => this.getTodos());
  }

  destroyTodo(todo: ITodo) {
    this.todoService.delete(todo).subscribe(() => this.getTodos());
  }

  toggleTodo(todo: ITodo) {
    this.todoService.toggle(todo).subscribe(() => this.getTodos());
  }

  clearCompleted() {
    this.todoService.deleteCompleted().subscribe(() => this.getTodos());
  }
}
