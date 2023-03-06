import { useState } from "react";
import CardRow from "./CardRow";

export default function Flashcard(props) {   
    
    const [selecionaCard, setSelecionaCard] = useState(null);
    const [pergunta, setPergunta] = useState(false);
    const [resposta, setResposta] = useState(false);

    const showAnswer = () => {
        setResposta(true);
    };

    const handleArrowClick = (index) => {
        setSelecionaCard(index);
        setPergunta(true);
        setResposta(false);
    };

    return (
        <>
            {props.cards.map((card, index) => {
                return (
                    <CardRow 
                        key={index}
                        index={index}
                        number={index + 1}
                        selecionaCard={selecionaCard !== null}
                        handleArrowClick={() => handleArrowClick(index)} 
                        pergunta={pergunta}
                        question={card.question}
                        resposta={resposta}
                        answer={card.answer}
                        showAnswer={showAnswer}
                        contarPerguntasConcluidas={props.contarPerguntasConcluidas}
                    />
                )
            })}
        </>
    );
}