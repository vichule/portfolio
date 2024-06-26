import { useContext } from 'react';
import { ThemeContext } from '../App';
import { LightOff, LightOn, LinkedProjects, NavDiv, NavLinkStyled } from '../styled/menuStyled';
import { BannerDiv, HomeBanner, HomeContainer, IntroDiv, UlStyled, UpBtn } from '../styled/homeStyled';
import { CardItem, GitRepoIcon, LinkIcon, MainImg, ProjectsContainer } from '../styled/projectsStyled';
import coolpic from '../assets/coolpic.jpg';
import oxygen from '../assets/oxygen.jpg';
import dashboard from '../assets/dashboard.jpg';
import hotel from '../assets/hotel.jpg';
import api from '../assets/api.jpg';
import laravel from '../assets/hotelLaravel.jpg';

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
                            setTheme('light');
                        }}>
                            {theme}
                        </LightOn> : <LightOff onClick={() => {
                            setTheme('dark');
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
                            <p>Website de un hotel de lujo llamado hotel Miranda. Realizado con HTML & CSS para un despliegue responsive.</p>
                        </div>
                        <div>
                            <LinkedProjects rel="nofollow noopener noreferrer" target='blank' href="https://github.com/vichule/HotelMiranda"><GitRepoIcon /> CODIGO</LinkedProjects>
                            <LinkedProjects rel="nofollow noopener noreferrer" target='blank' href="https://vichule.github.io/HotelMiranda/"><LinkIcon />WEBSITE</LinkedProjects>
                        </div>
                    </CardItem>
                    <CardItem>
                        <h3>App de fotos</h3>
                        <MainImg>
                            <img src={coolpic} alt="" />
                        </MainImg>
                        <div>
                            <p>App de búsqueda de fotos responsive. Utilizando React, Redux & styled-components.</p>
                        </div>
                        <div>
                            <LinkedProjects rel="nofollow noopener noreferrer" target='blank' href="https://github.com/vichule/CoolPic_ReactApp"><GitRepoIcon /> CODIGO</LinkedProjects>
                            <LinkedProjects rel="nofollow noopener noreferrer" target='blank' href="http://cool-pic-app.s3-website.eu-west-3.amazonaws.com/"><LinkIcon />WEBSITE</LinkedProjects>
                        </div>
                    </CardItem>
                    <CardItem>
                        <h3>Hotel Miranda Dashboard</h3>
                        <MainImg>
                            <img src={dashboard} alt="" />
                        </MainImg>
                        <div>
                            <p>Dashboard app creada con React, Redux, TypeScript y styled-components.
                                Diseñada para los trabajadores del Hotel Miranda con el objetivo de poder gestionar los datos del hotel.(no responsive)</p>
                        </div>
                        <div>
                            <LinkedProjects rel="nofollow noopener noreferrer" target='blank' href="https://github.com/vichule/dashboard-miranda"><GitRepoIcon /> CODIGO</LinkedProjects>
                            <LinkedProjects rel="nofollow noopener noreferrer" target='blank' href="http://dashboard-miranda-v.s3-website.eu-west-3.amazonaws.com/"><LinkIcon />WEBSITE</LinkedProjects>
                        </div>
                    </CardItem>
                    <CardItem>
                        <h3>Oxygen Shop</h3>
                        <MainImg>
                            <img src={oxygen} alt="" />
                        </MainImg>
                        <div>
                            <p>Landind page básica y responsive, desarrollada con HTML & CSS.</p>
                        </div>
                        <div>
                            <LinkedProjects rel="nofollow noopener noreferrer" target='blank' href="https://github.com/vichule/oxygenShop"><GitRepoIcon /> CODIGO</LinkedProjects>
                            <LinkedProjects rel="nofollow noopener noreferrer" target='blank' href="https://vichule.github.io/oxygenShop/"><LinkIcon />WEBSITE</LinkedProjects>
                        </div>
                    </CardItem>
                    <CardItem>
                        <h3>API node-express</h3>
                        <MainImg>
                            <img src={api} alt="" />
                        </MainImg>
                        <div>
                            <p>Api realizada con node y express junto con mongoDB para poder trabajar y gestionar tanto en el dashboard del hotel como
                                en la Website Miranda de Laravel.
                            </p>
                        </div>
                        <div>
                            <LinkedProjects rel="nofollow noopener noreferrer" target='blank' href="https://github.com/vichule/node-express-app"><GitRepoIcon /> CODIGO</LinkedProjects>
                            <LinkedProjects rel="nofollow noopener noreferrer" target='blank' href="https://bdbppxlpje.execute-api.eu-west-3.amazonaws.com/dev/"><LinkIcon />WEBSITE</LinkedProjects>
                        </div>
                    </CardItem>
                    <CardItem>
                        <h3>Hotel Miranda Laravel</h3>
                        <MainImg>
                            <img src={laravel} alt="" />
                        </MainImg>
                        <div>
                            <p>Website de un hotel de lujo llamado hotel Miranda. Realizado con HTML & CSS para un despliegue responsive, migrado a php y finalmente a laravel
                                con el fin de mostrar datos dinámicos en la web gracias a mi propia API.
                            </p>
                        </div>
                        <div>
                            <LinkedProjects rel="nofollow noopener noreferrer" target='blank' href="https://github.com/vichule/HotelMiranda-laravel"><GitRepoIcon /> CODIGO</LinkedProjects>
                            <LinkedProjects rel="nofollow noopener noreferrer" target='blank' href="http://35.180.91.27/"><LinkIcon />WEBSITE</LinkedProjects>
                        </div>
                    </CardItem>

                </ProjectsContainer>
                <UpBtn as='a' href='#intro'>^</UpBtn>
            </HomeContainer>
        </>
    )
}