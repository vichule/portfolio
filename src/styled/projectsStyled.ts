import styled from "styled-components";



export const ProjectsContainer = styled.div`
    margin-bottom: 20em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;  
    font-family: "DM Serif Display", serif;
    text-align: center;


    h3{
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 3px;
    }
    p{
        max-width: 40em;
        font-size: large;
    }
`

export const MainImg = styled.div`
    height: 30em;
    width: 45em;

    img{
        width: 100%;
        height: 100%;
        border-radius: 2em;
        border: 3px solid black;
    }
`