import styled from "styled-components";
import { device } from "./breakpoints";



export const ProjectsContainer = styled.div`
    margin-bottom: 5em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;  
    font-family: "DM Serif Display", serif;
    text-align: center;
    

    h3{
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 3px;
        color: ${({ theme }) => theme.titleColor};
    }
    p{
        max-width: 40em;
        font-size: large;
        color: ${({ theme }) => theme.textColor};
    }
`

export const MainImg = styled.div`
    height: 15em;
    width: 20em;

    img{
        width: 100%;
        height: 100%;
        border-radius: 2em;
        border: 3px solid black;
    }

    @media ${device.md}{
        height: 30em;
        width: 45em;
    }
`

export const CardItem = styled.div`
    margin-bottom: 5em;
    padding: 1.5em;
`