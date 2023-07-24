import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { observer } from "mobx-react-lite";
import { ThemeContext } from "../context/ThemeContext";
import { IStore, ITheme, ITodo } from "../interfaces/interfaces";


export const Content = observer(() => {
  const { todoStore } : IStore = useContext(StoreContext);

  const { themeEven } : ITheme = useContext(ThemeContext);
  const { themeOdd } : ITheme = useContext(ThemeContext);


  const getTheme = (idx: number) => {

    if (!(idx&1)) {
      return themeOdd;
    } else {
      return themeEven;
    } 
  };

  const updateTodo = (e: React.ChangeEvent<HTMLInputElement>, el: ITodo) => {
    todoStore.updateTodo(el, e.target.value);
  };

  return (
    <>
    {todoStore.todoList.map((el, idx) => 
      <div className={(el.completed) ? "content__item bggray" : "content__item " + getTheme(idx)} key={el.id}>
        <input type="checkbox"
               name="completed"
               className="content__checkbox"
               checked={el.completed}
               onChange={() => todoStore.completeTodo(el)}
        />
        <input onChange={(e) => updateTodo(e, el)}
               name="todo"
               className={(el.completed) ? "content__text bggray line" : "content__text " + getTheme(idx)}
               value={el.todo}
        />
        <button className="content__btn" onClick={() => todoStore.removeTodo(el)}>-</button>
      </div>)
    }
    </>
  )
});
