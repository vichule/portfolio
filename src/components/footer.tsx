import styled from "styled-components"


export const Footer = () => {

    return(
        <>
            <footer>
                <FooterText>© Copyright 2024 | Javier Cabañas</FooterText>
            </footer>
        </>
    )
}

const FooterText = styled.h3`
    text-align: center;
    margin: 0;
    padding: 1em;
    background-color: black;
    letter-spacing: 3px;
`