import { createGlobalStyle } from "styled-components";

export interface Theme {
    bgColor: string;
    textColor: string;
    titleColor: string;
    btnBg: string;
}

export const light: Theme = {
    bgColor: 'white',
    textColor: 'black',
    titleColor: 'black',
    btnBg: 'black',
};

export const dark: Theme = {
    bgColor: 'black',
    titleColor: 'deeppink',
    textColor: 'white',
    btnBg: 'deeppink'
};


export const GlobalStyles = createGlobalStyle<{ theme?: Theme }>`
    :root {
        background-color: ${({ theme }) => theme.bgColor};
    }
`;