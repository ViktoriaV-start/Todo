import { useState } from "react";

import { observer } from "mobx-react-lite";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Content } from "./components/Content";
import { ControlButtons } from "./components/ControlButtons";
import { ThemeContext } from "./context/ThemeContext";


export const App = observer(() => {

  const [themeOdd, setThemeOdd] = useState('');
  const [themeEven, setThemeEven] = useState('');

  const toggleThemeOdd = () => {
    setThemeOdd((prevThemeOdd) => (prevThemeOdd ? '' : 'colored'));
    };

  const toggleThemeEven = () => {
    setThemeEven((prevThemeEven) => (prevThemeEven ? '' : 'colored'));
  };

  return (
    <ThemeContext.Provider value={{themeOdd, themeEven, toggleThemeOdd, toggleThemeEven}}>
    <div className="App">
      <Header />
      <Form />
      <div className="container content">
        <ControlButtons />
        <Content />
      </div>
    </div>
    </ThemeContext.Provider>
  );
})

