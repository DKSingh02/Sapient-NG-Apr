import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Todo } from './todo';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Injectable()
export class TodoService {
  heroesUrl = 'http://localhost:3000/todos';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('TodosService');
  }

  /** GET todos from the server */
  getTodos (): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getTodos', []))
      );
  }
}
