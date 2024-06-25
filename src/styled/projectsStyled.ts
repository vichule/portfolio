import styled from "styled-components";
import { device } from "./breakpoints";
import { HiOutlineLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

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
        font-size: smaller;
        color: ${({ theme }) => theme.textColor};
    }

    @media ${device.md}{
        
        p{
            font-size: large;
        }
    }
`

export const MainImg = styled.div`
    height: 15em;
    width: 20em;
    display: inline-block;

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

    div:nth-child(3){
        min-height: 10em;
        margin-top: 3em;
    }
`

export const LinkIcon = styled(HiOutlineLink)`
    width: 25px;
    font-size: 1.5em;
    margin: 0.1em 0.1em 0em 0.1em;
    cursor: pointer;
    position: relative;
    
    
`

export const GitRepoIcon = styled(FiGithub)`
    width: 25px;
    font-size: 1.5em;
    margin: 0.1em 0.1em 0em 0.1em;
    cursor: pointer;
    position: relative;
    
    
`