import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo-component/todo-component';
import { SortByPipe } from './pipes/sortby-pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
