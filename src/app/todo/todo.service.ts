import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { ITodo } from '../shared/interfaces';
import { environment } from '../../environments/environment';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  apiBaseUrl: string = environment.apiBaseUrl;

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${this.apiBaseUrl}/todos`, {observe: 'response'})
                .pipe(
                  map((res) => {
                  let todos = res.body as ITodo[];
                  return todos;
                }),
                catchError(this.handleError));
  }

  getTodo(id: number): Observable<ITodo> {
    return this.http.get<ITodo>(`${this.apiBaseUrl}/todos/${id}`, {observe: 'response'})
                .pipe(
                  map((res) => {
                    let todo = res.body as ITodo;
                    return todo;
                  }),
                  catchError(this.handleError));
  }

  updateTodo(todo: ITodo): Observable<ITodo> {
    return this.http.put<ITodo>(`${this.apiBaseUrl}/todos/${todo.id}`, todo)
                .pipe(
                  map((res) => {
                    let todo = res as ITodo;
                    return todo;
                  }),
                  catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error); 
    if (error.error instanceof Error) {
      let errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Server error');
  }

  
}
