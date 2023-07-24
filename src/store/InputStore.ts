import { makeAutoObservable } from "mobx";
import { IInput } from "../interfaces/interfaces";

export class InputStore implements IInput {
  todoText: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  putValue(text: string) {
    this.todoText = this.checkInput(text);
  }

  checkInput(value: string) {
    let checkedValue = value.trim().slice(0, 255);
    if(!checkedValue) return checkedValue = '';

    checkedValue = checkedValue.replace(/[><]/g, '');
    checkedValue = checkedValue.replace(/script/g, '');
    return(checkedValue);
  }
}
