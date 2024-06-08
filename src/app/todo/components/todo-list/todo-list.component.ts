import { Component } from '@angular/core';
import {TodoService} from "../../todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  constructor(public todoService: TodoService) {
  }

  protected readonly JSON = JSON;
}
