import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {TodoListComponent} from "../todo-list/todo-list.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginName: string = '';

  constructor(    private router:Router) {
  }

  ngOnInit(): void {
  }

  submit(login:string){
    this.router.navigate(["todo/:" + login])
  }
}

