import styled from "styled-components"
import { useState } from "react";
import logo from "./assets/logo.png"
import Flashcard from "./components/Flashcard"
import Footer from "./components/Footer"
import cards from "./mock"

export default function App() {

    const [perguntasConcluidas, setPerguntasConcluidas] = useState(0); 

    function contarPerguntasConcluidas() {
        const conluidas = perguntasConcluidas + 1;
        setPerguntasConcluidas(conluidas);
    }

    return (
        <>
            <StyledConteudo>
                <StyledLogoNome>
                    <StyledLogo>
                        <img src={logo} alt="logo" />
                    </StyledLogo>
                    <StyledNome>
                        <span>ZapRecall</span>
                    </StyledNome>
                </StyledLogoNome>
        
                <StyledFlashcard>
                    <Flashcard 
                        cards={cards}
                        contarPerguntasConcluidas={contarPerguntasConcluidas} 
                    />
                </StyledFlashcard>
        
                <Footer 
                    cards={cards}
                    perguntasConcluidas={perguntasConcluidas}
                    contarPerguntasConcluidas={contarPerguntasConcluidas} 
                /> 
            </StyledConteudo>
      </>
    );
}

const StyledConteudo = styled.div`
    width: 375px;
    background-color: #FB6B6B;
    margin: 20px auto;
`;

const StyledLogoNome =  styled.div`
    margin-top: 48px;
    padding-top: 48px;
    display: flex;
`;

const StyledLogo = styled.div`
    img {
        width: 52px;
        height: 60px;
        margin-left: 56px;
    }
`;

const StyledNome = styled.div`
    width: 203px;
    height: 44px;
    font-size: 36px;
    font-family: 'Righteous', cursive;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledFlashcard = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 109px;
`;