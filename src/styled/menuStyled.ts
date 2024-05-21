import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";
import { device } from "./breakpoints";


export const BasicBtnStyled = styled.button`
    font-weight: 600;
    width: 12rem;
    height: 3.5rem;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.btnBg};
    color: white;
    transition: all ease 300ms;
    display: inline-block;
    align-content: center;
    margin: 1em;

    &:hover{
        background-color: #d156cd;
        color: black;
    }

    @media ${device.md}{
        width: 16rem
    }
`

export const LinkedProjects = styled.a`
    font-weight: 600;
    width: 8rem;
    height: 3.5rem;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.btnBg};
    color: white;
    transition: all ease 300ms;
    display: inline-block;
    align-content: center;
    margin: 0.5em;


    &:hover{
        background-color: #d156cd;
        color: black;
    }

    @media ${device.md}{
        width: 10rem
    }
`

export const LightOn = styled(CiLight)`
    font-weight: 600;
    width: 5rem;
    height: 2.5rem;
    background: none;
    color: #e1ba01;
    transition: all ease 300ms;

    &:hover{
        filter: drop-shadow(2px 1px 1px white);
        cursor: pointer;
    }
`

export const LightOff = styled(MdOutlineNightlight)`
    font-weight: 600;
    width: 5rem;
    height: 2.5rem;
    background: none;
    color: #e1ba01;
    transition: all ease 300ms;

    &:hover{
        filter: drop-shadow(2px 1px 1px black);
        cursor: pointer;
    }
`

export const NavLinkStyled = styled(NavLink)`
    color: ${({ theme }) => theme.titleColor};
    font-size: 1.8rem;
    font-weight: 400;
    align-items: center;
    padding: 15px;
    font-family: "Bebas Neue", sans-serif;
    &.active {
        font-weight: 600;
        border-bottom: 3px solid ${({ theme }) => theme.titleColor};
  }
  &:hover {
    color: ${({ theme }) => theme.titleColor};
    filter: drop-shadow(1px 1px 5px deeppink);
  }
`

export const LogoContainer = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
`

export const NavDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.bgColor};
`