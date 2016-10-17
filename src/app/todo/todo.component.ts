import { Component, OnInit } from '@angular/core';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  private todos;

  constructor(private todoService: TodoService) { }

  getTodos(){
    return this.todoService.get().then(todos => {
      this.todos = todos;
    });
  }

  ngOnInit() {
    this.getTodos();
  }
}
