import styled from "styled-components"
import { useState } from "react";
import seta_play from "../assets/seta_play.png"
import seta_virar from "../assets/seta_virar.png"
import QuaseNaoLembrei from "./QuaseNaoLembrei";
import NaoLembrei from "./NaoLembrei";
import Zap from "./Zap";


export default function CardRow(props) {

    const button = {
        quaseNaoLembrei: <QuaseNaoLembrei index={props.index + 1} />,
        naoLembrei: <NaoLembrei index={props.index + 1} />,
        zap: <Zap index={props.index + 1} />
    };

    const [botaoDaResposta, setBotaoDaResposta] = useState(undefined);

    const handleClick = (button) => {
        setBotaoDaResposta(button);
        props.contarPerguntasConcluidas();
    };

    if(!props.selecionaCard) {
        return button[botaoDaResposta] || (
            <StyledCardRow>
                <span data-test="flashcard-text">{`Pergunta ${props.index +1}`}</span>
                <img onClick={props.showAnswer} src={seta_play} alt="seta" />
            </StyledCardRow>
        );
    }

    return (
        (props.showAnswer ? (
            <StyledCardResposta>
                <span data-test="flashcard-text">{props.answer}</span>
                <Botoes>
                    <Vermelho data-test="no-btn" onClick={() => handleClick('naoLembrei')}>Não Lembrei</Vermelho>
                    <Laranja data-test="partial-btn" onClick={() => handleClick('quaseNaoLembrei')}>Quase não lembrei</Laranja>
                    <Verde data-test="zap-btn" onClick={() => handleClick('zap')}>Zap!</Verde>
                </Botoes>
            </StyledCardResposta>
        ) : (
            <StyledCardPergunta>
                <span data-test="flashcard-text">{props.question}</span>
                <img onClick={props.showAnswer} src={seta_virar} alt="seta_virar" />
            </StyledCardPergunta>
        ))
    );
}


const StyledCardRow = styled.div`
    width: 300px;
    height: 65px;
    margin-bottom: 25px;
    margin-left: 37px;
    background-color: #FFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &:first-child {
        margin-top: 58px;
    }
    
    span {
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        margin-left: 15px;
    }

    img {
        width: 20px;
        height: 23px;
        margin-right: 15px;
    }
`;

const StyledCardPergunta = styled.div`
    width: 299px;
    height: 131px;
    margin-bottom: 25px;
    margin-left: 37px;
    margin-top: 30px;
    padding-top: 15px;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-size: 18px;
    color: #333;
    position: relative;

    span {
        margin-left: 15px;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
    }

    img {
        width: 30px;
        height: 20px;
        position: absolute;
        bottom: 8px;
        right: 10px;
    }
`;

const StyledCardResposta = styled.div`
    width: 299px;
    height: 131px;
    margin-bottom: 25px;
    margin-left: 37px;
    margin-top: 30px;
    padding-top: 15px;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    span {
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #333;
        margin-left: 15px;
        display: flex;
    }
`;

const Botoes = styled.button`
    display: flex;
    justify-content: space-around;
    margin-top: 21px;

    button {
        width: 85px;
        height: 37px;
        border-radius: 5px;
        color: #FFF;
        font-size: 12px;
        cursor: pointer;
    }
`;

const Vermelho = styled.button`
    padding: 0 7px;
    background-color: #FF3030;
`;

const Laranja = styled.button`
    background-color: #FF922E;
`;

const Verde = styled.button`
    background-color: #2FBE34;
`;