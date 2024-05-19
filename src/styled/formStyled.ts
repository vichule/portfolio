import styled from "styled-components"
import { device } from "./breakpoints"

export const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
    padding: 5em;
    font-family: "Bebas Neue", sans-serif;
`

export const InputContainer = styled.div`
    display: grid;
    margin: 1em;
    text-align: left;
`


export const FormStyled = styled.form`
    display: grid;
    width: auto;
    border-radius: 2em;
    padding: 1em;
`

export const LabelForms = styled.label`
    color: black;
    font-size: 1.8rem;
`

export const InputForms = styled.input`
    background-color: white;
    color: deeppink;
    font-size: 1.3rem;
    font-family: "Bebas Neue", sans-serif;
    border: 3px solid ${({theme}) => theme.titleColor};
    padding: 0.5em;
    /* max-width: 12em; */
`

export const TextAreaForms = styled.textarea`
    background-color: white;
    border: none;
    color: deeppink;
    font-size: 1.3rem;
    max-height: 8rem;
    font-family: "Bebas Neue", sans-serif;
    border: 3px solid ${({theme}) => theme.titleColor};
    padding: 0.5em;
`

export const RowContainer = styled.div`
    
    @media ${device.md}{
        display: flex;
    }
`
