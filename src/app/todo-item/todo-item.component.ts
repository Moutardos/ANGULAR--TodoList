import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../model/todo";

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  tache!: Todo ;
  @Output()
  eventNotification = new EventEmitter<Todo>()

  description: string = "";
  edit:boolean = false;
  constructor() {
  }

  public taskUpdate(){
    this.edit = false;
    this.eventNotification.emit(this.tache);
  }
  ngOnInit(): void {
  }

}
