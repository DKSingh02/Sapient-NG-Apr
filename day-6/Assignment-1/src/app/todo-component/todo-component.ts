import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../todo-service';
import { Todos } from '../types/Todos';
import { Observable } from 'rxjs';
import { TodoSortOrder } from '../types/Todo-sort-order';
import { HEADER_CONST, TODO_LISTS_CONST } from '../constants/constants';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.html',
  styleUrls: ['./todo-component.css']
})
export class TodoComponent implements OnInit {

  /**
   * this variable holds list of all the todos
   */
  todos: Observable<Todos[]>;
  /**
   * Title of the component
   */
  title: string = ':----- Todos Lists -----:';
  /**
   * todoSortOrderList variable holds array of sort criteria 
   */
  todoSortOrderList : TodoSortOrder[] = [ {id: 1, name: 'asc'}, {id: 2, name: 'desc'}];
  /**
   * sortOrder variable holds default sorting order asc/desc
   */
  sortOrder: string = 'asc';
  /**
   * sortColumn variable holds column name on which we want to apply sort 
   */
  sortColumn: string = 'title'
  /**
   * tableHeader variable holds table columns names 
   */
  tableHeader = HEADER_CONST;
  /**
   * todosList variable holds todos keys list 
   */
  todosList  = TODO_LISTS_CONST;

  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
  this.todos = this.todoService.findAll();
  }

  /**
   * onSelectionChange method update sortOrder based on new selection made on radio button
   * @params  { value } of type TodoSortOrder
   */
  onSelectionChange(value: TodoSortOrder, column: number): void {
    this.sortColumn = this.todosList.slice(column, column+1)[0];
    this.sortOrder = value.id === 2 ? 'desc' : 'asc';
  }
}
