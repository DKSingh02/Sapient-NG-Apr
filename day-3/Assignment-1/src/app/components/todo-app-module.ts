//Submodule :Greeter Domain
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListComponent, TodoFormComponent } from './';

@NgModule({
    declarations: [TodoListComponent, TodoFormComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    //sharing objects across the modules
    exports: [TodoListComponent, TodoFormComponent]
})
export class TodoAppModule { }