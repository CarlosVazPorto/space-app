import Imagem from "../Galeria/Imagem";

const ModalZoom = ({ foto }) => {
    return (
        <>
            {foto && 
                <dialog open={!!foto}>
                    <Imagem 
                        foto={foto} 
                        expandida={true} 
                    />
                    <form method="dialog">
                        <button>Ok</button>
                    </form>
                </dialog>
            }
        </>
    );
};

export default ModalZoom;
