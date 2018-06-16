import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { ITodo } from '../shared/interfaces';

@Injectable()
export class TodoService {

  constructor(http: HttpClient) { }

  
}
