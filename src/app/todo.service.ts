import {Injectable, Input} from '@angular/core';
import {CreateTodo, Todo, TodoResponse, UpdateTodo} from "./model/todo";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }


  getTodos(username: string | null): Observable<Todo[]>{
    return this.httpClient
      .get<TodoResponse>("https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo/" + username + "/todos")
        .pipe(map(response => response.todos));
  }

  createTodo(label: string, username: string | null):Observable<boolean> {
    let data: CreateTodo = {label:label};
    return this.httpClient
      .post<Todo>('https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo/' + username + "/todos", data)
        .pipe(
              map((todo)=> true),
              catchError((err) => of(false)));
  }

  updateTodo(todo: Todo, username: string | null): Observable<boolean>{
    let newTodo: UpdateTodo = {
      label:todo.label,
      done:todo.done
    }
    return this.httpClient
      .put<Todo>(' https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo/' + username + "todos/" + todo.id,
        newTodo)
      .pipe(
          map((todo) => true),
          catchError(err => of(false))

      );
  }

  deleteTodo(id: string, username: string | null) : Observable<boolean>{
    return this.httpClient
      .delete('https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo/' + username + "/todo" + id)
      .pipe(
          map((todo) => true),
              catchError(err => of(false))
      );
  }


}
