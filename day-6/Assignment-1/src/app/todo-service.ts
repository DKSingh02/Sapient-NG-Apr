import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todos } from './types/Todos';


@Injectable({
    providedIn: 'root'
})
export class ToDoService {

    url: string = 'https://jsonplaceholder.typicode.com/todos';
    
    constructor(private http: HttpClient) { }
    findAll(): Observable<Todos[]> {
        return this.http.get<Todos[]>(this.url);
    }
}