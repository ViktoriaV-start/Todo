import { makeAutoObservable } from "mobx";
import { INITIAL_TODO_ARRAY } from "../config/constants";


export class TodoStore {
  todoList = INITIAL_TODO_ARRAY;
  
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todoList.unshift(todo);
  }

  removeTodo(todo) {
    this.todoList = this.todoList.filter(elem => elem.id !== todo.id);
  }

  removeFirst() {
    this.todoList.shift();
  }

  removeLast() {
    this.todoList.pop();
  }

  completeTodo(todo) {
    todo.completed = !todo.completed;
    if(todo.completed) {
      this.removeTodo(todo);
      this.todoList.push(todo);
    }
  }

  updateTodo(todo, text) {
    todo.todo = text;
  }
}
