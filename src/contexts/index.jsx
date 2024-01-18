import { createContext, useState } from "react";

export const themes = {
    light: {
        background: '#e5e4e4',
        input: {
            inputBorder: '#969696',
            inputBg: '#fff',
            inputColor: '#000'
        },
        card: {
            cardBg: '#cacaca',
            boxShadow: '#9a9a9a',
            cardHover: '#ddd',
            infoPokemon: {
                colorBg: '#fff',
                colorName: '#000',
                colorType: '#000'
            }
        },
        loadMoreBtn: {
            colorBorder: '#445186',
            colorBg: '#feec51',
            color: '#445186'
        },
        profile: {
            colorBg: '#fff',
            boxShadow: '#a7a7a7',
            imageBg: '#e7e7e7',
            color: '#000',
            colorDesc: '#4a4a4a'
        }
    },

    dark: {
        background: '#232227',
        input: {
            inputBorder: '#787676',
            inputBg: '#000',
            inputColor: '#f4f4f4'
        },
        card: {
            cardBg: '#3d3d3d',
            boxShadow: '#000',
            cardHover: '#575757',
            infoPokemon: {
                colorBg: '#2b2b2b',
                colorName: '#c4c4c4',
                colorType: '#f1f1f1'
            }
        },
        loadMoreBtn: {
            colorBorder: '#bf00ffa3',
            colorBg: '#c2c0e2',
            color: '#bf00ffa3'
        },
        profile: {
            colorBg: '#3d3d3d',
            boxShadow: '#000',
            imageBg: '#292929',
            color: '#f1f1f1',
            colorDesc: '#bcbcbc'
        }
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.dark);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}