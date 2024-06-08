import {Component, Input} from '@angular/core';
import {ITodo} from "../../models/todo.model";
import {TodoService} from "../../todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {

  constructor(public todoService: TodoService) {
  }
  @Input()
  todo!: ITodo;

  isEdit = false;
}
