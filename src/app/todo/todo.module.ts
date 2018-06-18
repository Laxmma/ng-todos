import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { AddEditTodoComponent } from './add-edit-todo/add-edit-todo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [TodoListComponent, AddEditTodoComponent],
  providers: [TodoService]
})
export class TodoModule { }
