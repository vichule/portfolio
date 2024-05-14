import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const BasicBtnStyled = styled.button`
    font-weight: 600;
    width: 16rem;
    height: 3.5rem;
    border: none;
    border-radius: 8px;
    background-color: black;
    color: white;
    transition: all ease 300ms;

    &:hover{
        background-color: grey;
        color: red;
    }
`

export const NavLinkStyled = styled(NavLink)`
    color: mediumpurple;
    font-size: 1.8rem;
    font-weight: 400;
    align-items: center;
    padding: 15px;
    &.active {
        color: #bc9cff;
        font-weight: 600;
        border-bottom: 3px solid mediumpurple;
  }
  &:hover {
    color: #bc9cff;
    filter: drop-shadow(1px 1px 5px #bc9cff);
  }
`

export const LogoContainer = styled.div`
    position: absolute;
    top: 0;
`