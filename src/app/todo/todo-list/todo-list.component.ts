import { Component, OnInit } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { TodoService } from '../todo.service';

import { ITodo } from '../../shared/interfaces';
import { EmitMessageService } from '../../shared/emit-message.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: any[] = [];

  successMessage: string;

  constructor(private todoService:TodoService,private messageEmitter: EmitMessageService) {}

  ngOnInit() {
    this.todoService.getTodos()
        .subscribe((response: ITodo[]) => {
          this.todos = response;
        });

    this.messageEmitter.messageEvent.subscribe((msg) => {
      this.successMessage = msg;
    });
  }

}
