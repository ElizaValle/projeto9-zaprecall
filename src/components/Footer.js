import styled from "styled-components"

export default function Footer({ cards, perguntasConcluidas }) {
    return (
        <StyledFooter>
            {perguntasConcluidas} / {cards.length} CONCLUÍD0S
        </StyledFooter>
    );
}

const StyledFooter = styled.div`
    width: 375px;
    height: 70px;
    margin-top: 109px;
    background-color: #FFF;
    bottom: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Recursive', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #333;
`;