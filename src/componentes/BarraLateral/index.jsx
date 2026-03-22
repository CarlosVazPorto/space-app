import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`;

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                        iconeAtivo={}
                        iconeInativo={}
                        ativo={true}
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={}
                        iconeInativo={}
                        ativo
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={}
                        iconeInativo={}
                        ativo
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={}
                        iconeInativo={}
                        ativo
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={}
                        iconeInativo={}
                        ativo
                    >
                        Surpeenda-me
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    );
};

export default BarraLateral;
