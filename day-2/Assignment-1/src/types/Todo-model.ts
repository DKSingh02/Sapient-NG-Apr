import { TodoInterface } from './todo-interface';

export class TodoModel {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    constructor (todo: TodoInterface) { 
        this.userId = todo.userId;
        this.id = todo.id;
        this.title = todo.title;
        this.completed = todo.completed;
    }
}