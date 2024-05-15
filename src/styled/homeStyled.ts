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
    min-height: 5em;
`
export const CodeIcon = styled(PiCodeLight)`
    font-size: 20em;
`

export const IntroDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10em;
    color: black;

    p{
        max-width: 40em;
    }
    h1{
        font-size: 7em;
        display: inline;
    }
`

