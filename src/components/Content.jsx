import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { observer } from "mobx-react-lite";
import { ThemeContext } from "../context/ThemeContext";


export const Content = observer(() => {
  const { todoStore } = useContext(StoreContext);

  const { themeEven } = useContext(ThemeContext);
  const { themeOdd } = useContext(ThemeContext);


  const getTheme = (idx) => {

    if (!(idx&1)) {
      return themeOdd;
    } else {
      return themeEven;
    } 
  };

  const updateTodo = (e, el) => {
    todoStore.updateTodo(el, e.target.value);
  };

  return (
    <>
    {todoStore.todoList.map((el, idx) => 
      <div className={(el.completed) ? "content__item bggray" : "content__item " + getTheme(idx)} key={el.id}>
        <input type="checkbox"
               id={el.id}
               className="content__checkbox"
               checked={el.completed}
               onChange={() => todoStore.completeTodo(el)}
        />
        <input onChange={(e) => updateTodo(e, el)}
               className={(el.completed) ? "content__text bggray line" : "content__text " + getTheme(idx)}
               value={el.todo}
        />
        <button className="content__btn" onClick={() => todoStore.removeTodo(el)}>-</button>
      </div>)
    }
    </>
  )
});
