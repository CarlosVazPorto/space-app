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

const Populares = () => {
    return (
        <Titulo $alinhamento="center">
            Populares
        </Titulo>
    );
};

export default Populares;
