import styled from "styled-components";
import { PiCodeLight } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { GrDocumentText } from "react-icons/gr";
import bannerB from '../assets/sky.jpg';
import { device } from "./breakpoints";

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
    font-size: 0em;

    @media ${device.md} {
        font-size: 20em;
    }
`

export const IntroDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 2em;
    color: ${({ theme }) => theme.textColor};

    p{
        max-width: 40em;
        font-family: "DM Serif Display", serif;
        font-size: smaller;
    }
    h1{
        font-size: 3em;
        display: inline;
        font-family: "Bebas Neue", sans-serif;
        color: ${({ theme }) => theme.titleColor};
    }

    @media ${device.lg} {
        h1{
            font-size: 7em;
        }
        p{
            font-size: large;
        }
    }
`

export const HomeProjects = styled.div`
    text-align: center;
    color: black;
    font-family: "DM Serif Display", serif;
    color: ${({ theme }) => theme.textColor};
    margin-bottom: 10em;
    padding: 0.8em;

    h1{
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 5px;
        color: ${({ theme }) => theme.titleColor};
    }
    h3{
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 3px;
    }
    
`

export const HomeContact = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.textColor};
    font-family: "DM Serif Display", serif;
    padding: 1em;

    h1{
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 5px;
        color: ${({ theme }) => theme.titleColor};
    }
    h3{
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 3px;
    }
    
`

export const ProjectContainer = styled.div`
    width: 340px;
    height: 250px;


    img{
        width: 100%;
        height: 100%;
        border: 3px solid ${({ theme }) => theme.imgBorder};
        border-radius: 1em;
    }

    @media ${device.md}{
        width: 550px;
        height: 300px;
    }
`

export const HomeBanner = styled.div`
    background-image: url(${bannerB});
    min-height: 940px;
    padding: 1em;
    background-size: cover;
`

export const BannerDiv = styled.div`
    text-align: center;
    display: flex;
    
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

    @media ${device.md} {
        margin: 20em;
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
    margin-bottom: 10em;

    ul{
        display: flex;
        list-style: square;
        align-items: flex-start;
        max-width: 45em;
        flex-direction: column;
    }

    li{
        margin: 1em;
        font-size: smaller;
    }

    h1{
        font-family: "Bebas Neue", sans-serif;
        color: ${({ theme }) => theme.titleColor};
    }

    @media ${device.md}{
        li{
            font-size: large;
        }
    }
    
`

export const ImgContainer = styled.div`
    width: 600px;
    display: none;

    img{
        width: 100%;
        height: 100%;
        border-radius: 2em;
    }

    @media ${device.lg}{
        display: block;
    }
`

export const TipsDiv = styled.div`
    font-family: "DM Serif Display", serif;
    text-align: center;
    margin-bottom: 10em;

    div:nth-child(1){
        position: relative;
        top: 50px;
        float: left;
        border: 5px solid ${({ theme }) => theme.textColor};
        padding: 25px;
        border-radius: 1em;
    }

    h2{
        font-family: "Bebas Neue", sans-serif;
    }
`

export const UpBtn = styled.button`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 40px;
    background-color: deeppink;
    margin: 1em;
    border-radius: 8px;
    border: 1px solid transparent;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    color: white;
    text-align: center;
    align-content: center;
    transition: all ease 300ms;

    &:hover{
        background-color: #d156cd;
        color: black;
    }
`

export const UlContact = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    justify-content: center;
    font-family: "Bebas Neue", sans-serif;
    font-size: 1.5em;
    li{
        display: flex;
        align-items: center;
        margin-right: 2em;
    }

    
`

export const PhoneIcon = styled(FaPhone)`
    width: 40px;
    font-size: 2em;
    margin-right: 0.3em;
    color: ${({ theme }) => theme.btnBg};
`

export const MailIcon = styled(MdOutlineMailOutline)`
    width: 50px;
    font-size: 4em;
    margin-right: 0.25em;
    color: ${({ theme }) => theme.btnBg};
`

export const GitIcon = styled(FaGithub)`
    width: 45px;
    font-size: 2.5em;
    margin-left: 0.3em;
    color: ${({ theme }) => theme.btnBg}; 
    cursor: pointer;
    position: relative;
    top: 0.25em;

    &:hover{
        color: #d156cd;
    }
`

export const LinkedIcon = styled(ImLinkedin)`
    width: 45px;
    font-size: 2.5em;
    margin-left: 0.3em;
    color: ${({ theme }) => theme.btnBg}; 
    cursor: pointer;
    position: relative;
    top: 0.25em;
    
    &:hover{
        color: #d156cd;
    }
`

export const CvIcon = styled(GrDocumentText)`
    width: 45px;
    font-size: 2.5em;
    margin-left: 0.3em;
    color: ${({ theme }) => theme.btnBg}; 
    cursor: pointer;
    position: relative;
    top: 0.25em;
    
    &:hover{
        color: #d156cd;
    }
`