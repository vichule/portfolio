import { useContext } from 'react';
import reactLogo from '../assets/react.svg';
import bannerB from '../assets/stars.jpg';
import { ThemeContext } from '../App';
import { BasicBtnStyled, LogoContainer, NavLinkStyled } from '../styled/menuStyled';
import styled from 'styled-components';
import { HomeContainer, UlStyled } from '../styled/homeStyled';

export const Home = () => {

    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeContext error.');
    }

    const { theme, setTheme } = themeContext;
    return (
        <HomeContainer>
            <HomeBanner>
                <div>

                    <UlStyled>
                        <li><NavLinkStyled to={'/'}>Home</NavLinkStyled></li>
                        <li><NavLinkStyled to={'/projects'}>Projects</NavLinkStyled></li>
                    </UlStyled>
                </div>
            </HomeBanner>

            <TempDiv>
                <LogoContainer>
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </LogoContainer>
                <h1>My portfolio Home</h1>
                <div className="card">
                    <BasicBtnStyled onClick={() => {
                        setTheme(theme === 'dark' ? 'light' : 'dark');
                    }}>
                        {theme}
                    </BasicBtnStyled>
                </div>
            </TempDiv>
        </HomeContainer>

    )
}

const HomeBanner = styled.div`
    //background-image: url(${bannerB});
    background: linear-gradient(white, #9198e5); 
    min-height: 300px;
    padding: 1em;
`

const TempDiv = styled.div`
    background: linear-gradient(#9198e5, white);
    display: flex;
    flex-direction: column;
`