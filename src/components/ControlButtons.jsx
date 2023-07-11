import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Button } from "./Button";
import { ThemeContext } from "../context/ThemeContext";

export const ControlButtons = () => {
  const { todoStore } = useContext(StoreContext);
  const { toggleThemeOdd } = useContext(ThemeContext);
  const { toggleThemeEven } = useContext(ThemeContext);

  const removeFirst = () => {
    todoStore.removeFirst();
  };

  const removeLast = () => {
    todoStore.removeLast();
  };

  const colourEven = () => {
    toggleThemeEven();
  };

  const colourOdd = () => {
    toggleThemeOdd();
  };

  return(
    <div className="control">
      <Button func={removeFirst} title={"Удалить запись в начале"}/>
      <Button func={removeLast} title={"Удалить запись в конце"}/>
      <Button func={colourEven} title={"Изменить цвет для чётных"}/>
      <Button func={colourOdd} title={"Изменить цвет для нечётных"}/>
    </div>
  );
};
