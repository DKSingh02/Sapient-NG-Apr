import todoData from './mockdata/todo-mocks';
import { TodoModel, TodoInterface } from './types';

export default class TodoService {
    allTodoList (): Promise<TodoInterface[]> {
        return new Promise((resolve) => {
            resolve(todoData);
        });
    }

    saveTodo (newTodo: TodoModel): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let isItemSaved: boolean = false;
            try {
                const isItemExist : boolean = todoData.map((todoItem) => {
                    if(todoItem.id === newTodo.id) {
                        return true;
                    }
                })[0];

                if (!isItemExist) {
                    todoData.push(newTodo);
                    isItemSaved = true;
                }
            } catch (error) {
                console.log(error);
                reject(isItemSaved);
            }
            resolve(isItemSaved);
        });
    }

    updateTodo (updateTodo: TodoInterface): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let isItemUpdated: boolean = false;

            try {
                let itemToUpdate: TodoInterface = todoData.find((todoItem) => todoItem.id === updateTodo.id);
                if (itemToUpdate) {
                    itemToUpdate.title = updateTodo.title;
                    isItemUpdated = true;
                }
            } catch (error) {
                console.log(error);
                reject(isItemUpdated);
            }

            resolve(isItemUpdated);
        });
    }

    completedTodoList (): Promise<TodoInterface[]> {
        return new Promise((resolve, reject) => {
            let completedToDoList: TodoInterface[] = [];
            try {
                completedToDoList = todoData.filter((todoItem) => todoItem.completed);
            } catch (error) {
                console.log(error);
                reject(error);
            }
            resolve(completedToDoList);
        });
    }
}