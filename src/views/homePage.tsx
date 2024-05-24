import { FormEvent, useContext, useState } from 'react';
import photo from '../assets/code.jpg'
import { ThemeContext } from '../App';
import { BasicBtnStyled, LightOff, LightOn, NavDiv, NavLinkStyled } from '../styled/menuStyled';
import { AboutDiv, BannerDiv, CodeIcon, CvIcon, GitIcon, HomeBanner, HomeContact, HomeContainer, HomeProjects, ImgContainer, IntroDiv, LinkedIcon, MailIcon, PhoneIcon, TipsDiv, UlContact, UlStyled, UpBtn } from '../styled/homeStyled';
import { useNavigate } from 'react-router-dom';
import { SwiperProjects } from '../components/swiperProjects.tsx';
import { FormContainer, FormStyled, InputContainer, InputForms, RowContainer, TextAreaForms } from '../styled/formStyled.ts';
import cv from '../assets/cv.pdf';
import Swal from 'sweetalert2';


export const Home = () => {

    const navigator = useNavigate()
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeContext error.');
    }

    const { theme, setTheme } = themeContext;
    const [spinner, setSpinner] = useState(false);


    interface FormData extends EventTarget {
        name: HTMLFormElement,
        email: HTMLFormElement,
        subject: HTMLFormElement,
        message: HTMLFormElement,

    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = event.target as FormData
        const name = data.name.value
        const email = data.email.value
        const subject = data.subject.value
        const message = data.message.value

        setSpinner(true)

        fetch("https://formsubmit.co/ajax/2461bbd3a28ad50544f2913659e7b2f5", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message
            })
        })
            .then(response => {

                setSpinner(false)
                data.name.value = "";
                data.email.value = "";
                data.subject.value = "";
                data.message.value = "";
                
                if (response.ok) {
                    Swal.fire({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        icon: 'success',
                        title: "Datos enviados correctamente, gracias por tu tiempo!",

                    });
                    return response.json()
                } else {
                    Swal.fire({
                        toast: true,
                        position: "bottom-end",
                        showConfirmButton: false,
                        timer: 3000,
                        icon: 'error',
                        title: "Ha habido un error, por favor inténtalo de nuevo.",

                    });
                }

                


            })
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

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
                            <a rel="nofollow noopener noreferrer" target='blank' href={cv}><CvIcon /></a>
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
                <h3>Desde aquí podrás enviarme un mensaje desde este formulario directo a mi bandeja de entrada gracias a formSubmit!</h3>
                <FormContainer>
                    <FormStyled onSubmit={(event) => handleSubmit(event)} method='POST'>

                        <RowContainer>
                            <InputContainer>
                                <InputForms type="text" name="name" required placeholder='Nombre Completo' />
                            </InputContainer>
                            <InputContainer>
                                <InputForms type="email" name="email" required placeholder='Email para poder escribirte' />
                            </InputContainer>
                        </RowContainer>
                        <InputContainer>
                            <InputForms type="text" name="subject" required placeholder='Asunto a tratar' />
                        </InputContainer>
                        <InputContainer>
                            <TextAreaForms name="message" id="message" cols={30} rows={8} required placeholder='Deja aqui el mensaje que quieras que reciba'></TextAreaForms>
                        </InputContainer>
                        <div className="card">

                            <BasicBtnStyled type="submit">Enviar</BasicBtnStyled>
                        </div>
                        {spinner ? <span>Enviando datos, por favor espere...</span> : ''}
                    </FormStyled>

                </FormContainer>
                <h3>Estoy deseando tener noticias tuyas. ¿No te gustan los formularios? Dejo también mis datos de contacto:</h3>
                <div>
                    <UlContact>
                        <li><PhoneIcon /> 646816908</li>
                        <li><MailIcon /> javier.cabanasdiaz@gmail.com</li>
                    </UlContact>
                </div>
            </HomeContact>
            <UpBtn as='a' href='#intro'>^</UpBtn>
        </HomeContainer >

    )
}


