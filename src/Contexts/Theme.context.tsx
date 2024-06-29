import React from 'react';
import { DarkColors, LightColors } from '../Styles/Colors';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import ResetStyle from '../Styles/ResetStyle';
import { ToastContainer } from 'react-toastify';
import useLocalStorage from '../Hooks/useLocalStorage.hook';
import { createContext } from "react";
import { ThemeContextProps } from '../Protocols/Theme';

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

/**
 * Context to handle the theme of the application
 */
export default function ThemeContextProvider({ children }: { children?: React.ReactNode; }) {
    const [darkMode, setDarkMode] = useLocalStorage<boolean>('darkModeEnabled', true);
    const getCurrentColors = () => darkMode ? DarkColors : LightColors;

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <ThemeProvider theme={{ ...getCurrentColors() }}>
                <ResetStyle />
                <ToastContainer
                    limit={4}
                    pauseOnFocusLoss
                    theme={darkMode ? 'dark' : 'light'}
                />
                {children}
            </ThemeProvider >
        </ThemeContext.Provider>
    );
}