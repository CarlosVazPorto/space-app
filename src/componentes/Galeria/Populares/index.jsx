import { styled } from "styled-components";
import Titulo from "../../Titulo";
import fotos from "../../Titulo";

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;
`;

const Botao = styled.button`
    background-color: transparent;
    color: #FFFFFF;
    border: 2px solid;
    border-color: #C98CF1;
    border-radius: 10px;
    padding: 12px 20px;
    font-size: 20px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares = () => {
    return (
        <Titulo $alinhamento="center">
            Populares
        </Titulo>
    );
};

export default Populares;
