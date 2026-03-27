import styled from "styled-components";

const ItemNavegacaoEstilizado = styled.li`

`;

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
    return (
        <ItemNavegacaoEstilizado $props={{ ativo }}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="Ícone do link para a página" />
            {children}
        </ItemNavegacaoEstilizado>
    );
};

export default ItemNavegacao;
