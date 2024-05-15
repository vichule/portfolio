import { useContext } from 'react';
import reactLogo from '../assets/react.svg';
import bannerB from '../assets/sky.jpg';
import photo from '../assets/code.jpg'
import bannerC from '../assets/laptop.jpg';
import { ThemeContext } from '../App';
import { BasicBtnStyled, LightOff, LightOn, LogoContainer, NavDiv, NavLinkStyled } from '../styled/menuStyled';
import styled from 'styled-components';
import { CodeIcon, HomeContact, HomeContainer, HomeProjects, IntroDiv, UlStyled } from '../styled/homeStyled';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigator = useNavigate()
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeContext error.');
    }

    const { theme, setTheme } = themeContext;
    return (
        <HomeContainer>
            <HomeBanner id='intro'>



                <TempDiv>
                    <LogoContainer>
                        <img src={reactLogo} className="logo react" alt="React logo" />
                        {/* <h2>Javier Cabañas</h2> */}
                    </LogoContainer>

                </TempDiv>
                <BannerDiv >
                    <h1>Trying to find the path to success</h1>
                    <h3>| Full-Stack Junior Developer |</h3>
                    <h3>| JAVIER CABAÑAS |</h3>
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
                        de poder aprender más y demostrar al mundo mis capacidades.
                    </p>
                    <p>Aquí podrás navegar y ver mi recorrido: </p>
                </div>
                <CodeIcon />
            </IntroDiv>
            <div>
                <AboutDiv>
                    <ImgContainer>
                        <img src={photo} />
                    </ImgContainer>


                    <ul>
                        <h1>Sobre mi:</h1>
                        <li>Soy una persona amable, sincera, divertida y que siempre intenta hacer sentir bien a los demás.</li>
                        <li>Creo firmemente en la contínua evolución de la persona gracias al fruto de la constancia.</li>
                        <li>Con ganas de contribuir de manera positiva y crecer con un buen equipo a mi lado. </li>
                        <li>Como desarrollador Full-Stack he trabajado con MongoDB & MySQL, React, Node & Express, TypeScript y PHP entre otros.</li>
                        <li>Aún sigo siendo un junior en desarrollo pero me esfuerzo a diario en conseguir cumplir mi objetivo de convertirme en un auténtico Senior Full-Stack!</li>
                        <li>Busco un trabajo donde pueda conocer a personas y no solo puestos de trabajo o numeros. </li>
                        <li>Considero que el teletrabajo es muy positivo, aunque siempre es bueno ir a la oficina al menos un dia a la semana para mejorar la comunicación entre compañeros.</li>
                        <div className="card">
                            <h1>Clickea en el botón si quieres saber más de mí:</h1>
                            <BasicBtnStyled onClick={() => {
                            }}>
                                Descargar CV
                            </BasicBtnStyled>
                        </div>
                    </ul>

                </AboutDiv>
            </div>
            <TipsDiv>
                <div>
                    <h2>Estamos en contacto</h2>
                    <p>¿Tienes algun consejo para mi?</p>
                    <div className="card">

                        <BasicBtnStyled as="a" href="#contact">
                            Contactame!
                        </BasicBtnStyled>
                    </div>
                </div>

            </TipsDiv>
            <HomeProjects>
                <h1>Mis proyectos:</h1>
                <h3>Te invito a echarle un ojo a mis proyectos.</h3>
                <p>Esto es una simple vista por encima, si quieres más detalles clickea más abajo!</p>
                <div>
                    <h2>Swiper de fotos y datos de mis proyectos</h2>
                    <ul>
                        <li>Oxygen Shop</li>
                        <li>App de Fotos</li>
                        <li>Hotel Miranda WebSite</li>
                        <li>Hotel Miranda Dashboard</li>
                    </ul>
                </div>
                <div className="card">
                    <BasicBtnStyled onClick={() => {
                        navigator('/projects')
                    }}>
                        Ir a mis proyectos
                    </BasicBtnStyled>
                </div>
            </HomeProjects>
            <HomeContact id='contact'>
                <h1>Contact</h1>
                <form>
                    <ul>
                        <li><label>Full Name</label><input type="text" name="name" required placeholder="Your name" /></li>
                        <li>
                            <label>Email</label>
                            <input type="email" name="field3" required/>
                        </li>
                        <li>
                            <label>Subject</label>
                            <input type="text" name='subject'/>
                        </li>
                        <li>
                            <label>Your Message</label>
                            <textarea name="message" id="message"></textarea>
                        </li>
                        <li>
                            <input type="submit" value="Submit" />
                        </li>
                    </ul>
                </form>
            </HomeContact>
        </HomeContainer>

    )
}

const HomeBanner = styled.div`
    background-image: url(${bannerB});
    min-height: 940px;
    padding: 1em;
    background-size: cover;
`

const TempDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const BannerDiv = styled.div`
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

const AboutDiv = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5em;
    font-family: "DM Serif Display", serif;
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
    }
    
`

const ImgContainer = styled.div`
    width: 600px;

    img{
        width: 100%;
        height: 100%;
        border-radius: 2em;
    }
`

const TipsDiv = styled.div`
    background-image: url(${bannerC});
    background-size: cover;
    min-height: 50em;
    font-family: "DM Serif Display", serif;
    text-align: center;

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
