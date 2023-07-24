import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Button } from "./Button";
import { ThemeContext } from "../context/ThemeContext";
import { IStore, ITheme } from "../interfaces/interfaces";

export const ControlButtons = () => {
  const { todoStore } : IStore = useContext(StoreContext);
  const { toggleThemeOdd } : ITheme = useContext(ThemeContext);
  const { toggleThemeEven } : ITheme = useContext(ThemeContext);

  const removeFirst = (): void => {
    todoStore.removeFirst();
  };

  const removeLast = (): void => {
    todoStore.removeLast();
  };

  const colourEven = (): void => {
    toggleThemeEven();
  };

  const colourOdd = (): void => {
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
