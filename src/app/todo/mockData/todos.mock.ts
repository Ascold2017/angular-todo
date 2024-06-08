import * as uuid from "uuid";
import {TodoStatus} from "../models/todo.model";

export const todosMock = [
  {
    id: uuid.v4(),
    title: 'Todo 1',
    content: 'Lorem ipsum dolor mne v karman',
    createdAt: new Date().getTime(),
    status: TodoStatus.PENDING
  },
  {
    id: uuid.v4(),
    title: 'Todo 2',
    content: 'Lorem ipsum dolor mne v karman',
    createdAt: new Date().getTime(),
    status: TodoStatus.COMPLETED
  }
]
