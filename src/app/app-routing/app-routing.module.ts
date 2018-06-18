;
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoListComponent } from '../todo/todo-list/todo-list.component';
import { AddEditTodoComponent } from '../todo/add-edit-todo/add-edit-todo.component';

const appRoutes: Routes = [
  { path: 'todo-list', component: TodoListComponent },
  { path: 'todo/:id', component: AddEditTodoComponent },
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [PageNotFoundComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
