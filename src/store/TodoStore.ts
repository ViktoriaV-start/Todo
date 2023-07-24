import { makeAutoObservable } from "mobx";
import { INITIAL_TODO_ARRAY } from "../config/constants";
import { ITodo, ITodoStore } from "../interfaces/interfaces";


export class TodoStore implements ITodoStore {
  todoList: ITodo[] = INITIAL_TODO_ARRAY;
  
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: ITodo) {
    this.todoList.unshift(todo);
  }

  removeTodo(todo: ITodo) {
    this.todoList = this.todoList.filter(elem => elem.id !== todo.id);
  }

  removeFirst() {
    this.todoList.shift();
  }

  removeLast() {
    this.todoList.pop();
  }

  completeTodo(todo: ITodo) {
    todo.completed = !todo.completed;
    if(todo.completed) {
      this.removeTodo(todo);
      this.todoList.push(todo);
    }
  }

  updateTodo(todo: ITodo, text: string) {
    todo.todo = text;
  }
}
