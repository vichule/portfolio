import { useContext } from 'react';
import photo from '../assets/code.jpg'
import { ThemeContext } from '../App';
import { BasicBtnStyled, LightOff, LightOn, NavDiv, NavLinkStyled } from '../styled/menuStyled';
import { AboutDiv, BannerDiv, CodeIcon, CvIcon, GitIcon, HomeBanner, HomeContact, HomeContainer, HomeProjects, ImgContainer, IntroDiv, LinkedIcon, MailIcon, PhoneIcon, TipsDiv, UlContact, UlStyled, UpBtn } from '../styled/homeStyled';
import { useNavigate } from 'react-router-dom';
import { SwiperProjects } from '../components/swiperProjects.tsx';
import { FormContainer, FormStyled, InputContainer, InputForms, TextAreaForms } from '../styled/formStyled.ts';



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
                        <li>Busco un trabajo donde pueda conocer a personas y no solo puestos de trabajo o números. </li>
                        <li>Considero que el teletrabajo es muy positivo, aunque siempre es bueno ir a la oficina al menos un día a la semana para mejorar la comunicación entre compañeros.</li>
                        <div className="card">
                            <h1>Si quieres saber más de mí:</h1>
                            {/* <BasicBtnStyled as="a" rel="nofollow noopener noreferrer" target='blank' href="https://www.canva.com/design/DAGDQPHM6HI/lS0cZ9pIWci6bXpKILhXxg/view?utm_content=DAGDQPHM6HI&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                                 CV
                            </BasicBtnStyled> */}
                            <a rel="nofollow noopener noreferrer" target='blank' href="https://www.canva.com/design/DAGDQPHM6HI/lS0cZ9pIWci6bXpKILhXxg/view?utm_content=DAGDQPHM6HI&utm_campaign=designshare&utm_medium=link&utm_source=editor"><CvIcon /></a>
                            <a rel="nofollow noopener noreferrer" target='blank' href="https://www.linkedin.com/in/javinteger/"><LinkedIcon /></a>
                            <a rel="nofollow noopener noreferrer" target='blank' href="https://github.com/vichule"><GitIcon /></a>

                        </div>
                    </ul>

                </AboutDiv>
            </div>

            <HomeProjects>
                <h1>Mis proyectos:</h1>
                <h3>Te invito a echarle un ojo a mis proyectos.</h3>
                <p>Esto es una simple vista por encima, si quieres más detalles clickea más abajo!</p>
                <div>
                    <SwiperProjects />

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
                <h3>Desde aquí podrás enviarme un mensaje desde este formulario directo a mi bandeja de entrada</h3>
                <FormContainer>
                    <FormStyled action="https://formsubmit.co/2461bbd3a28ad50544f2913659e7b2f5" method="POST">

                        <div style={{ display: 'flex' }}>
                            <InputContainer>
                                {/* <LabelForms htmlFor="name">Full Name</LabelForms> */}
                                <InputForms type="text" name="name" required placeholder='Nombre Completo'/>
                            </InputContainer>
                            <InputContainer>
                                {/* <LabelForms htmlFor="email">Email</LabelForms> */}
                                <InputForms type="email" name="email" required placeholder='Email para poder escribirte'/>
                            </InputContainer>
                        </div>
                        <InputContainer>
                            {/* <LabelForms htmlFor="subject">Subject</LabelForms> */}
                            <InputForms type="text" name="subject" required placeholder='Asunto a tratar'/>
                        </InputContainer>

                        <InputContainer>
                            {/* <LabelForms htmlFor="message">Message</LabelForms> */}
                            <TextAreaForms name="notes" id="message" cols={30} rows={8} required placeholder='Deja aqui el mensaje que quieras que reciba'></TextAreaForms>
                        </InputContainer>
                        <div className="card">
                            <BasicBtnStyled type="submit">Enviar</BasicBtnStyled>
                        </div>
                    </FormStyled>

                </FormContainer>
                <h3>Estoy deseando tener noticias tuyas por lo que aquí dejo también mis datos de contacto:</h3>
                <div>
                    <UlContact>
                        <li><PhoneIcon />Teléfono - 646816908</li>
                        <li><MailIcon />Email - javier.cabanasdiaz@gmail.com</li>
                    </UlContact>
                </div>
            </HomeContact>
            <UpBtn as='a' href='#intro'>^</UpBtn>
        </HomeContainer >

    )
}


