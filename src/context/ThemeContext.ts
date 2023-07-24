import { ITheme } from './../interfaces/interfaces';
import React from 'react';

export const ThemeContext = React.createContext<ITheme>(
    {
        themeOdd: '',
        themeEven: '',
        
        toggleThemeOdd: () => {
        console.log('default')
        },
        toggleThemeEven: () => {
          console.log('default')
        }
    }); 
    