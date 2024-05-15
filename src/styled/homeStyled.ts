import styled from "styled-components";
import { PiCodeLight } from "react-icons/pi";

export const HomeContainer = styled.div`
    background-color: white;
    color: white;
`

export const UlStyled = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0;
`
export const CodeIcon = styled(PiCodeLight)`
    font-size: 20em;
`

export const IntroDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 10em;
    color: black;

    p{
        max-width: 40em;
        font-family: "DM Serif Display", serif;
        font-size: large;
    }
    h1{
        font-size: 7em;
        display: inline;
        font-family: "Bebas Neue", sans-serif;
    }
`

export const HomeProjects = styled.div`
    text-align: center;
    color: black;
    font-family: "DM Serif Display", serif;

    h1{
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 5px;
    }
    h3{
        text-decoration: underline;
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 3px;
    }
    
`

export const HomeContact = styled.div`
    text-align: center;
    color: black;
    font-family: "DM Serif Display", serif;

    h1{
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 5px;
    }
    h3{
        text-decoration: underline;
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 3px;
    }
    ul{
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        height: 20em;
    }

    li{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
`

