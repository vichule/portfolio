import styled from "styled-components"

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
    background-color: grey;
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
    border-radius: 1em;
    padding: 1em;
    background-color: white;
    border: none;
    color: deeppink;
    font-size: 1.3rem;
    /* max-width: 12em; */
`

export const TextAreaForms = styled.textarea`
    border-radius: 1em;
    padding: 1em;
    background-color: white;
    border: none;
    color: deeppink;
    font-size: 1.3rem;
    max-height: 8rem;
`
