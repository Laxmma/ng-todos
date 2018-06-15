import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoListComponent],
  providers: [TodoService]
})
export class TodoModule { }
