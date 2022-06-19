import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo'
import {TodoService} from "../todo.service";
import {map} from "rxjs";
import {ActivatedRoute} from "@angular/router";

declare var M : any;

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {


  public todos : Todo[] = [];
  public isUpdating:boolean = false;
  public  userName: string  | null = "";
  public addTodoItem(taskName: string) {
    console.log("on rentre dans add :" + taskName );
    this.todoService.createTodo(taskName, this.userName)
      .subscribe(result => {
        if (result)
          this.initiateTodos();
        else
          this.notification("Error, couldn't add task")

      });
  }

  public initiateTodos(){
    this.isUpdating = true;
    console.log("salut" + this.userName)
    this.todoService.getTodos(this.userName).subscribe(result =>{
      this.todos =  result;
      this.isUpdating = false;
    });
  }

  public notifyTodoUpdated(tache:Todo){
    this.todoService.updateTodo(tache, this.userName).subscribe(result => {
      if (result)
        this.notification(tache.label + 'has been modified');
      else
        this.notification("Error with the task modified");
        });
  }

  public deleteTodo(tache:Todo){


    this.todoService.deleteTodo(tache.id, this.userName).subscribe(result => {
      if (result)
        this.notification(tache.label + "has been deleted");
      else
        this.notification("error with the task being deleted");
    })
    this.initiateTodos();
  }
  public notification(msg:string ){
    M.toast({html:msg})

  }

  constructor(private todoService : TodoService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.userName = this.route.snapshot.paramMap.get("username")
    this.initiateTodos();

  }
}
