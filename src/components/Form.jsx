import { useContext, useEffect, useRef } from "react"
import { StoreContext } from "../context/StoreContext"
import { observer } from "mobx-react-lite";

export const Form = observer(({ fetching }) => {
  const { todoStore } = useContext(StoreContext);
  const { inputStore } = useContext(StoreContext);
  
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
    inputRef.current.value = '';
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
               type="search"
               placeholder="Новая задача"
               onChange={(e) => inputStore.putValue(e)}
               ref={inputRef}
        >
        </input>
        <button className="form__btn" type="submit" onClick={handleClick}>Сохранить</button>   
      </form>
    </div>
  )
});
