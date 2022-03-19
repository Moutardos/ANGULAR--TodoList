import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo'
import {TodoService} from "../todo.service";
import {map} from "rxjs";

declare var M : any;

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  public todos : Todo[] = [];
  public inputValue: string = "";
  public isUpdating:boolean = false;

  public addTodoItem() {
    this.todoService.createTodo(this.inputValue)
      .subscribe(result => {
        if (result)
          this.initiateTodos();
        else
          this.notification("Error, couldn't add task")

      });
  }

  public initiateTodos(){
    this.isUpdating = true;
    this.todoService.getTodos().subscribe(result =>{
      this.todos =  result;
      this.isUpdating = false;
    });
  }

  public notifyTodoUpdated(tache:Todo){
    this.todoService.updateTodo(tache).subscribe(result => {
      if (result)
        this.notification(tache.label + 'has been modified');
      else
        this.notification("Error with the task modified");
        });
  }
  public notification(msg:string ){
    M.toast({html:msg})

  }

  constructor(private todoService : TodoService) {
  }
  ngOnInit() {
    this.initiateTodos();

  }
}
