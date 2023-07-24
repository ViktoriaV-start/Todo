import { IInput, IStore, ITodoStore } from './../interfaces/interfaces';
import React from "react";

export const StoreContext = React.createContext<IStore>({
  todoStore: {} as ITodoStore, 
  inputStore: {} as IInput
});
