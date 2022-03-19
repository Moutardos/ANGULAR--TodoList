import { Injectable } from '@angular/core';
import {CreateTodo, Todo, TodoResponse, UpdateTodo} from "./model/todo";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private httpClient: HttpClient) {
  }
  getTodos(): Observable<Todo[]>{
    return this.httpClient
      .get<TodoResponse>("https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo?delay=2000")
        .pipe(map(response => response.todos));
  }
  createTodo(label:string):Observable<boolean> {
    let newTodo: CreateTodo = {label:label};
    return this.httpClient
      .post<Todo>('https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo', newTodo)
        .pipe((()=> of(true)),
              catchError((err) => of(false)));
  }

  updateTodo(todo:Todo): Observable<boolean>{
    let newTodo: UpdateTodo = {
      label:todo.label,
      done:todo.done
    }
    return this.httpClient
      .put<Todo>(' https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo/' + todo.id, newTodo)
      .pipe((() => of(true)), catchError(err => of(false)));
  }
}
