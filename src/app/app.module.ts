import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {FormsModule} from "@angular/forms";
import { TodoItemComponent } from './todo-item/todo-item.component';
import { DatePipe } from './date.pipe';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TodoFormComponent } from './todo-form/todo-form.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    DatePipe,
    TodoFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
