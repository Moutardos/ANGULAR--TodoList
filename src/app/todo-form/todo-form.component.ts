import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../model/todo";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output()
  eventInputEmitter = new EventEmitter<string>();


  inputValue : string = '';
  emitNewTask(){
    if (this.inputValue != '')
      this.eventInputEmitter.emit(this.inputValue);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
