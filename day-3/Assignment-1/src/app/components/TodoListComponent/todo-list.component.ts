import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
})
export class TodoListComponent {
  title: string = 'Todo List Compoent';
  todoLists: string[] = [];

  constructor() {}

  getTodoList(listsItems: string[]) {
    this.todoLists = listsItems;
  }

  removeTodo(index: number) {
    this.todoLists.splice(index, 1);
  }
}
