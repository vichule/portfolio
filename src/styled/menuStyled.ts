import styled from "styled-components";


export const BasicBtnStyled = styled.button`
    font-weight: 600;
    width: 16rem;
    height: 3.5rem;
    border: none;
    border-radius: 8px;
    background-color: white;
    color: black;
    transition: all ease 300ms;

    &:hover{
        background-color: grey;
        color: red;
    }
`