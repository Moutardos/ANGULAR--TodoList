import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'todo/:username', component: TodoListComponent},


];export class AppRoutingModule {
}
