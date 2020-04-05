import TodoService from './Todo-service';
import { TodoModel, TodoInterface } from './types';

export default class TodoComponent {
    constructor (private todoService: TodoService) {}

    getAllToDos (): void {
        this.todoService.allTodoList().then((alltodos: TodoInterface[]) => {
            console.log('\nAll ToDo List: -----------------------------------------');
            console.log(alltodos);
           });
    }

    saveNewTodo(newTodoItem: TodoModel): void {
        this.todoService.saveTodo(newTodoItem).then((isItemSaved: boolean) => {

            console.log('\nTodo Item Saved: ---------------------------------------');
            console.log(isItemSaved);
           });;
    }

    updateToDo (updateTodoItem: TodoInterface): void{
       this.todoService.updateTodo(updateTodoItem).then((isTodoItemUpdated: boolean) => {
           
            console.log('\nTodo Item Updated: -------------------------------------');
            console.log(isTodoItemUpdated);
       });
    }

    getCompletedTodos(): void {
        this.todoService.completedTodoList().then((isTodoItemUpdated: TodoInterface[]) => {
           
            console.log('\nCompleted Todo Item: -------------------------------------');
            console.log(isTodoItemUpdated); 
        });
    }
}

/** INITIALIZE TODO SERVICE */
let toDoService = new TodoService();

/** GET TODO COMPONENT INSTANCE */
let todoComponent = new TodoComponent(toDoService);

/** ADD BELOW TODO ITEM */
const newTodo: TodoInterface = {
    userId: 1,
    id: Math.floor(Math.random() * 100000 + 1),
    title: `ToDo ${Math.floor(Math.random() * 100000 + 1)}`,
    completed: false
}

/** UPDATE BELOW TODO ITEM */
const updateTodo: TodoInterface = {
    userId: 1,
    id: 2,
    title: 'Todo Item Updated',
    completed: false
}

/** GET ALL TODO ITEMS */
todoComponent.getAllToDos();


/** SAVE A NEW TODO ITEM */
const saveNewTodo: TodoModel = new TodoModel(newTodo);
todoComponent.saveNewTodo(saveNewTodo);


/** UPDATE THE TODO ITEM */
const updateNewTodo: TodoModel = new TodoModel(updateTodo);
todoComponent.updateToDo(updateNewTodo);

/** GET TODOS WHICH ARE COMPLETE */
todoComponent.getCompletedTodos();