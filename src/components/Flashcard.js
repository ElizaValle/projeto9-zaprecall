import { useState } from "react";
import CardRow from "./CardRow";

export default function Flashcard(props) {   
    
    const [selecionaCard, setSelecionaCard] = useState(null);
    const [pergunta, setPergunta] = useState(false);
    const [resposta, setResposta] = useState(false);

    const showAnswer = () => {
        setResposta(true);
    };

    /* const showQuestion = () => {
        setPergunta(true);
    }; */

    const handleArrowClick = (index) => {
        setSelecionaCard(index);
        setPergunta(true);
        setResposta(false);
        alert('oi');
    };

    return (
        <>
            {props.cards.map((index) => {
                return (
                    <CardRow 
                        key={index}
                        index={index}
                        number={index + 1}
                        selecionaCard={selecionaCard !== null}
                        handleArrowClick={() => handleArrowClick(index)} 
                        pergunta={pergunta}
                        question={props.cards[index].question}
                        //showQuestion={showQuestion}
                        resposta={resposta}
                        answer={props.cards[index].answer}
                        showAnswer={showAnswer}
                        contarPerguntasConcluidas={props.contarPerguntasConcluidas}
                    />
                )
            })}
        </>
    );
}