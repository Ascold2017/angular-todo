import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ITodo} from "../../models/todo.model";
import {TodoService} from "../../todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TodoItemComponent {

  constructor(public todoService: TodoService) {
  }
  @Input()
  todo!: ITodo;

  isEdit = false;
}
