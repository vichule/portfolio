import { createGlobalStyle } from "styled-components";

export interface Theme {
    bgColor: string;
    textColor: string;
    titleColor: string;
    btnBg: string;
    imgBorder: string;
}

export const light: Theme = {
    bgColor: 'white',
    textColor: 'black',
    titleColor: 'black',
    btnBg: 'black',
    imgBorder: 'black'
};

export const dark: Theme = {
    bgColor: 'black',
    titleColor: 'deeppink',
    textColor: 'white',
    btnBg: 'deeppink',
    imgBorder: 'white'
};


export const GlobalStyles = createGlobalStyle<{ theme?: Theme }>`
    :root {
        background-color: ${({ theme }) => theme.bgColor};
    }
`;