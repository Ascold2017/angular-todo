import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITodo} from "../../models/todo.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "../../todo.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent implements OnInit {

  constructor(private todoService: TodoService) {
  }
  @Input()
  initialTodo: ITodo | null = null;
  @Output() submitEvent = new EventEmitter<void>();

  ngOnInit() {
    if (this.initialTodo) {
      this.todoForm.setValue({
        title: this.initialTodo.title,
        content: this.initialTodo.content
      })
    }
  }

  todoForm = new FormGroup({
    title: new FormControl(this.initialTodo?.title || '', [
      Validators.required
    ]),
    content:  new FormControl(this.initialTodo?.content || '' ,
      [
        Validators.required
      ])
  }, [ Validators.required])

  onSubmit() {
    if (this.todoForm.valid) {
      this.initialTodo
        // @ts-ignore
        ? this.todoService.updateTodo(this.initialTodo.id, this.todoForm.value)
        // @ts-ignore
        : this.todoService.createTodo(this.todoForm.value)
      this.submitEvent.emit()
    }
  }

  onReset() {
    this.submitEvent.emit()
  }

}
