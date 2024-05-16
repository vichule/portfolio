import { useContext } from 'react';
import { ThemeContext } from '../App';
import { LightOff, LightOn, NavDiv, NavLinkStyled } from '../styled/menuStyled';
import { BannerDiv, CodeIcon, HomeBanner, HomeContainer, IntroDiv, UlStyled } from '../styled/homeStyled';

export const Projects = () => {

    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeContext error.');
    }

    const { theme, setTheme } = themeContext;
    return (
        <>
            <HomeContainer>
                <HomeBanner id='intro'>

                    <BannerDiv >

                        <h1>| JAVIER CABAÑAS |</h1>
                        <h1>| Full-Stack Junior Developer |</h1>
                        <h3>Trying to find the path to success</h3>

                    </BannerDiv>
                </HomeBanner>
                <NavDiv>

                    <div className="card">
                        {theme === 'dark' ? <LightOn onClick={() => {
                            setTheme(theme === 'dark' ? 'light' : 'dark');
                        }}>
                            {theme}
                        </LightOn> : <LightOff onClick={() => {
                            setTheme(theme === 'dark' ? 'light' : 'dark');
                        }}>
                            {theme}
                        </LightOff>}

                    </div>
                    <UlStyled>
                        <li><NavLinkStyled to={'/'}>Home</NavLinkStyled></li>
                        <li><NavLinkStyled to={'/projects'}>Projects</NavLinkStyled></li>
                    </UlStyled>

                </NavDiv>
                <IntroDiv>

                    <div style={{ maxWidth: '65em' }}>
                        <h1>Antes que nada: Bienvenido!</h1>
                        <p>Hola! Mi nombre es Javier Cabañas y este es mi portfolio! Soy un apasionado de la programación
                            y desde hace tiempo he querido vivir trabajando en este mundo tan diverso y gigante con el fin
                            de poder aprender más y evolucionar como developer.
                        </p>
                        <p>Aquí podrás navegar y ver mi recorrido: </p>
                    </div>
                    <CodeIcon />
                </IntroDiv>

            </HomeContainer>
        </>
    )
}