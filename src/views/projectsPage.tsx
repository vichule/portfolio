import { useContext } from 'react';
import { ThemeContext } from '../App';
import { BasicBtnStyled, LightOff, LightOn, NavDiv, NavLinkStyled } from '../styled/menuStyled';
import { BannerDiv, HomeBanner, HomeContainer, IntroDiv, UlStyled } from '../styled/homeStyled';
import { MainImg, ProjectsContainer } from '../styled/projectsStyled';
import coolpic from '../assets/coolpic.jpg';
import oxygen from '../assets/oxygen.jpg';
import dashboard from '../assets/dashboard.jpg';
import hotel from '../assets/hotel.jpg';

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
                        <h1>Bienvenido a mis proyectos</h1>
                        <p>Hola! Aquí podrás ver mis proyectos más recientes con mayor detalle, su código y sus respectivos despliegues :
                        </p>
                    </div>
                </IntroDiv>
                <ProjectsContainer>
                    <div>
                        <h3>Titulo</h3>
                        <MainImg>
                            <img src={hotel} alt="" />
                        </MainImg>
                        <div>
                            <p>Descripcion</p>
                        </div>
                        <div>
                            <BasicBtnStyled>Repositorio</BasicBtnStyled>
                            <BasicBtnStyled>Despliegue</BasicBtnStyled>
                        </div>
                    </div>
                    <div>
                        <h3>Titulo</h3>
                        <MainImg>
                            <img src={coolpic} alt="" />
                        </MainImg>
                        <div>
                            <p>Descripcion</p>
                        </div>
                        <div>
                            <BasicBtnStyled>Repositorio</BasicBtnStyled>
                            <BasicBtnStyled>Despliegue</BasicBtnStyled>
                        </div>
                    </div>
                    <div>
                        <h3>Titulo</h3>
                        <MainImg>
                            <img src={dashboard} alt="" />
                        </MainImg>
                        <div>
                            <p>Descripcion</p>
                        </div>
                        <div>
                            <BasicBtnStyled>Repositorio</BasicBtnStyled>
                            <BasicBtnStyled>Despliegue</BasicBtnStyled>
                        </div>
                    </div>
                    <div>
                        <h3>Titulo</h3>
                        <MainImg>
                            <img src={oxygen} alt="" />
                        </MainImg>
                        <div>
                            <p>Descripcion</p>
                        </div>
                        <div>
                            <BasicBtnStyled>Repositorio</BasicBtnStyled>
                            <BasicBtnStyled>Despliegue</BasicBtnStyled>
                        </div>
                    </div>

                </ProjectsContainer>

            </HomeContainer>
        </>
    )
}