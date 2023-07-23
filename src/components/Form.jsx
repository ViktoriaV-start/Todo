import { useContext, useEffect, useRef, useState } from "react"
import { StoreContext } from "../context/StoreContext"
import { observer } from "mobx-react-lite";

export const Form = observer(() => {
  const [text, setText] = useState('');
  const { todoStore } = useContext(StoreContext);
  const { inputStore } = useContext(StoreContext);
  
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
    inputStore.putValue(text);
  }

  const handleClick = (e) => {
    e.preventDefault();
    const maxId = getMaxId();

    if(inputStore.todoText) {
      const newTodo = {
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
    const todos = todoStore.todoList;
    const maxId = todos.reduce((acc, item) => acc > item.id ? acc : item.id, 0);
    return(+maxId);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleClick}>
        <input className="form__input"
               type="text"
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
