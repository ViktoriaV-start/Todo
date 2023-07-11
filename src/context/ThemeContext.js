import React from 'react';

export const ThemeContext = React.createContext(
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
    