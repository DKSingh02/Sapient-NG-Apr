import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: 'todo-form.component.html',

})
export class TodoFormComponent {
   
  title: string = 'Todo Form Componet...';
  todoItem: string = '';
  todoLists: string[] = [];

  @Output()
  sendRequest = new EventEmitter<string[]>();
  constructor() { }

  onSubmit() {
    if(!this.todoItem) {
      return;
    }
    this.todoLists.unshift(this.todoItem);
    this.todoItem = '';
    this.sendRequest.emit(this.todoLists);
  }
}
