import Titulo from "../Titulo";
import Tags from "./Tags";

const Galeria = () => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    );
};

export default Galeria;
