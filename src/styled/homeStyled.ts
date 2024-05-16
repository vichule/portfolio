import styled from "styled-components";
import { PiCodeLight } from "react-icons/pi";
import bannerC from '../assets/laptop.jpg';
import bannerB from '../assets/sky.jpg';

export const HomeContainer = styled.div`
    background-color: ${({ theme }) => theme.bgColor};
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
    color: ${({ theme }) => theme.textColor};

    p{
        max-width: 40em;
        font-family: "DM Serif Display", serif;
        font-size: large;
    }
    h1{
        font-size: 7em;
        display: inline;
        font-family: "Bebas Neue", sans-serif;
        color: ${({ theme }) => theme.titleColor};
    }
`

export const HomeProjects = styled.div`
    text-align: center;
    color: black;
    font-family: "DM Serif Display", serif;
    color: ${({ theme }) => theme.textColor};

    h1{
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 5px;
        color: ${({ theme }) => theme.titleColor};
    }
    h3{
        text-decoration: underline;
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 3px;
    }
    
`

export const HomeContact = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.textColor};
    font-family: "DM Serif Display", serif;

    h1{
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 5px;
        color: ${({ theme }) => theme.titleColor};
    }
    h3{
        text-decoration: underline;
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 3px;
    }
    
`

export const ProjectContainer = styled.div`
    width: 550px;

    img{
        width: 100%;
        height: 100%;
        border: 3px solid black;
        border-radius: 1em;
    }
`

export const HomeBanner = styled.div`
    background-image: url(${bannerB});
    min-height: 940px;
    padding: 1em;
    background-size: cover;
`

// export const TempDiv = styled.div`
//     display: flex;
//     flex-direction: column;
// `

export const BannerDiv = styled.div`
    text-align: center;
    display: flex;
    margin: 20em;
    border: 8px solid white;
    flex-direction: column;
    padding: 1em;
    font-family: Georgia, 'Times New Roman', Times, serif;
    
    h1{
        letter-spacing: 10px;
        font-family: "Bebas Neue", sans-serif;
    }
    h3{
        letter-spacing: 10px;
    }
`

export const AboutDiv = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5em;
    font-family: "DM Serif Display", serif;
    color: ${({ theme }) => theme.textColor};

    ul{
        display: flex;
        list-style: square;
        align-items: flex-start;
        max-width: 45em;
        flex-direction: column;
    }

    li{
        margin-bottom: 1em;
        margin-left: 2em;
        font-size: large;
    }

    h1{
        font-family: "Bebas Neue", sans-serif;
        color: ${({ theme }) => theme.titleColor};
    }
    
`

export const ImgContainer = styled.div`
    width: 600px;

    img{
        width: 100%;
        height: 100%;
        border-radius: 2em;
    }
`

export const TipsDiv = styled.div`
    background-image: url(${bannerC});
    background-size: cover;
    min-height: 50em;
    font-family: "DM Serif Display", serif;
    text-align: center;
    margin-bottom: 10em;

    div:nth-child(1){
        position: relative;
        top: 200px;
        float: left;
        margin-left: 50px;
        border: 5px solid white;
        padding: 25px;
    }

    h2{
        font-family: "Bebas Neue", sans-serif;
    }
`