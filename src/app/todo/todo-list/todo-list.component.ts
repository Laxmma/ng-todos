import { Component, OnInit } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { TodoService } from '../todo.service';

import { ITodo } from '../../shared/interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: any[] = [];

  constructor(private todoService:TodoService) {}

  ngOnInit() {
    this.todoService.getTodos()
        .subscribe((response: ITodo[]) => {
          this.todos = response;
        });
  }

}
