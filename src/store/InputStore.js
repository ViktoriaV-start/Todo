import { makeAutoObservable } from "mobx";


export class InputStore {
  todoText = '';

  constructor() {
    makeAutoObservable(this);
  }

  putValue(e) {
    this.todoText = this.checkInput(e.target.value);
  }

  checkInput(value) {
    let checkedValue = value.trim().slice(0, 255);
    if(!checkedValue) return checkedValue = '';

    checkedValue = checkedValue.replace(/[><]/g, '');
    checkedValue = checkedValue.replace(/script/g, '');
    return(checkedValue);
  }
}
