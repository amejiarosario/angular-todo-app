import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  public todos;
  public activeTasks;
  public newTodo;
  public path;

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params['status'];
      this.getTodos(this.path);
    });
  }

  addTodo(){
    this.todoService
      .add({ title: this.newTodo, isDone: false })
      .subscribe(() => {
        this.getTodos();
        this.newTodo = ''; // clear input form value
      });
  }

  getTodos(query = ''){
    return this.todoService
      .get(query)
      .subscribe(todos => {
        this.todos = todos;
        this.activeTasks = this.todos.filter(todo => !todo.isDone).length;
      });
  }

  updateTodo(todo, newValue) {
    todo.title = newValue;
    return this.todoService.put(todo).subscribe(() => {
      todo.editing = false;
      return this.getTodos();
    });
  }

  destroyTodo(todo) {
    this.todoService.delete(todo).subscribe(() => {
      return this.getTodos();
    });
  }

  clearCompleted() {
    this.todoService.deleteCompleted().subscribe(() => {
      return this.getTodos();
    });
  }

  toggleTodo(todo) {
    this.todoService.toggle(todo).subscribe(() => {
      return this.getTodos();
    });
  }
}
