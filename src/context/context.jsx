import {createContext, useReducer} from "react";

export const ThemeContext = createContext()

const InitialState = {darkMode: false};

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
        return { darkMode: !state.darkMode };
        default:
        return state;
    }
};


export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, InitialState)

    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}