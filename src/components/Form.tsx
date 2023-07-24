import { useContext, useEffect, useRef, useState } from "react"
import { StoreContext } from "../context/StoreContext"
import { observer } from "mobx-react-lite";
import { IStore, ITodo } from "../interfaces/interfaces";

export const Form = observer(() => {

  const [text, setText] = useState('');
  const { todoStore } : IStore = useContext(StoreContext);
  const { inputStore } : IStore = useContext(StoreContext);
  
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    inputStore.putValue(text);
  }

  const handleClick = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const maxId: number = getMaxId();

    if(inputStore.todoText) {
      const newTodo: ITodo = {
      id: maxId+1,
      todo: inputStore.todoText,
      completed: false,
    };
    todoStore.addTodo(newTodo);
    inputStore.todoText = '';
    setText('');
    }
  };

  const getMaxId = () => {
    const todos: ITodo[] = todoStore.todoList;
    const maxId: number = todos.reduce((acc: number, item: ITodo) => acc > item.id ? acc : item.id, 0);
    return(maxId);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleClick}>
        <input className="form__input"
               type="text"
               name="new-todo"
               value={text}
               placeholder="Новая задача"
               onChange={handleChange}
               ref={inputRef}
        >
        </input>
        <button className="form__btn" type="submit" onClick={handleClick}>Сохранить</button>   
      </form>
    </div>
  )
});
