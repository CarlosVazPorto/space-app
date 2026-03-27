import styled from "styled-components";

const ItemNavegacaoEstilizado = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: #7B78E5;
`;

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
    return (
        <ItemNavegacaoEstilizado $ativo={{ ativo }}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="Ícone do link para a página" />
            {children}
        </ItemNavegacaoEstilizado>
    );
};

export default ItemNavegacao;
