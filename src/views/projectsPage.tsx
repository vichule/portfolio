import { useContext } from 'react';
import { ThemeContext } from '../App';
import { BasicBtnStyled, LightOff, LightOn, NavDiv, NavLinkStyled } from '../styled/menuStyled';
import { BannerDiv, HomeBanner, HomeContainer, IntroDiv, UlStyled } from '../styled/homeStyled';
import { CardItem, MainImg, ProjectsContainer } from '../styled/projectsStyled';
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
                    <CardItem>
                        <h3>Hotel Miranda Website</h3>
                        <MainImg>
                            <img src={hotel} alt="" />
                        </MainImg>
                        <div>
                            <p>Descripcion</p>
                        </div>
                        <div>
                            <BasicBtnStyled as="a" rel="nofollow noopener noreferrer" target='blank' href="https://github.com/vichule/HotelMiranda">Repositorio</BasicBtnStyled>
                            <BasicBtnStyled as="a" rel="nofollow noopener noreferrer" target='blank' href="https://vichule.github.io/HotelMiranda/">Despliegue</BasicBtnStyled>
                        </div>
                    </CardItem>
                    <CardItem>
                        <h3>App de fotos</h3>
                        <MainImg>
                            <img src={coolpic} alt="" />
                        </MainImg>
                        <div>
                            <p>Descripcion</p>
                        </div>
                        <div>
                            <BasicBtnStyled as="a" rel="nofollow noopener noreferrer" target='blank' href="https://github.com/vichule/CoolPic_ReactApp">Repositorio</BasicBtnStyled>
                            <BasicBtnStyled as="a" rel="nofollow noopener noreferrer" target='blank' href="http://cool-pic-app.s3-website.eu-west-3.amazonaws.com/">Despliegue</BasicBtnStyled>
                        </div>
                    </CardItem>
                    <CardItem>
                        <h3>Hotel Miranda Dashboard</h3>
                        <MainImg>
                            <img src={dashboard} alt="" />
                        </MainImg>
                        <div>
                            <p>Descripcion</p>
                        </div>
                        <div>
                            <BasicBtnStyled as="a" rel="nofollow noopener noreferrer" target='blank' href="https://github.com/vichule/dashboard-miranda">Repositorio</BasicBtnStyled>
                            <BasicBtnStyled as="a" rel="nofollow noopener noreferrer" target='blank' href="http://dashboard-miranda-v.s3-website.eu-west-3.amazonaws.com/">Despliegue</BasicBtnStyled>
                        </div>
                    </CardItem>
                    <CardItem>
                        <h3>Oxygen Shop</h3>
                        <MainImg>
                            <img src={oxygen} alt="" />
                        </MainImg>
                        <div>
                            <p>Descripcion</p>
                        </div>
                        <div>
                            <BasicBtnStyled as="a" rel="nofollow noopener noreferrer" target='blank' href="https://github.com/vichule/oxygenShop">Repositorio</BasicBtnStyled>
                            <BasicBtnStyled as="a" rel="nofollow noopener noreferrer" target='blank' href="https://vichule.github.io/oxygenShop/">Despliegue</BasicBtnStyled>
                        </div>
                    </CardItem>

                </ProjectsContainer>

            </HomeContainer>
        </>
    )
}