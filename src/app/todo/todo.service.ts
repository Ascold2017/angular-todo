import {Injectable} from '@angular/core';
import {ITodo, ITodoPayload, todoPayloadSchema, todoSchema, TodoStatus} from "./models/todo.model";
import * as uuid from 'uuid'
import {z} from 'zod'
import {todosMock} from "./mockData/todos.mock";

const LOCALSTORAGE_STATE_KEY = 'app-todos'
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: ITodo[] = []

  constructor() {
    console.log('LOAD DATA FROM LS')
    this.loadState()
  }

  async createTodo(payload: ITodoPayload) {
    try {
      await todoPayloadSchema.parseAsync(payload)
      this.todos.push({
        ...payload,
        id: uuid.v4(),
        createdAt: new Date().getTime(),
        status: TodoStatus.PENDING
      })
    } catch (e) {
      console.error(e)
    } finally {
      this.saveState()
    }
  }

  async updateTodo(id: ITodo['id'], payload: ITodoPayload) {
    try {
      await todoPayloadSchema.parseAsync(payload)
      this.todos = this.todos.map(todo => todo.id === id ? {
        ...todo,
        ...payload
      } : todo);
    } catch (e) {
      console.error(e)
    } finally {
      this.saveState()
    }
  }

  deleteTodo(id: ITodo['id']) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveState()
  }

  private saveState() {
    localStorage.setItem(LOCALSTORAGE_STATE_KEY, JSON.stringify(this.todos))
  }

  private async loadState() {
    const lsData = localStorage.getItem(LOCALSTORAGE_STATE_KEY);
    const schema = z.array(todoSchema)
    if (lsData) {
      try {
        const parsedData = JSON.parse(lsData);
        await schema.parseAsync(parsedData);
        this.todos = parsedData;
      } catch (e) {
        console.log('CANNOT LOAD DATA', e)
      }
    }
  }
}
