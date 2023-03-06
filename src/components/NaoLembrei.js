import styled from "styled-components";
import icone_erro from "../assets/icone_erro.png"

export default function NaoLembrei(props) {
    return (
        <StyledNaoLembrei>
            <span data-test="partial-btn">{`Pergunta ${props.index +1}`}</span>
            <img data-test="partial-icon" src={icone_erro} alt="icone_erro" />
        </StyledNaoLembrei>
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

const StyledNaoLembrei = styled(StyledCardRow)`
    color: #ff3030;
    text-decoration: line-through;
`;