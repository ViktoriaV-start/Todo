
export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
}

export interface IInput {
  todoText: string,
  putValue: (text: string) => void;
  checkInput: (value: string) => void,
}

export interface ITheme {
  themeOdd: string,
  themeEven: string,
  toggleThemeOdd: () => void,
  toggleThemeEven: () => void,
}

export interface ITodoStore {
  todoList: ITodo[],
  addTodo: (todo: ITodo) => void,
  removeTodo: (todo: ITodo) => void,
  removeFirst: () => void,
  removeLast: () => void,
  completeTodo: (todo: ITodo) => void,
  updateTodo: (todo: ITodo, text: string) => void,
}

export interface IStore {
  todoStore: ITodoStore, 
  inputStore: IInput
}

export interface IButton {
  title: string,
  func: () => void,
}
