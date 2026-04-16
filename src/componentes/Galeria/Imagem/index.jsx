const Imagem = ({ foto }) => {
    return (
        <figure>
            <img src={foto.url} alt={foto.titulo} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <p>Fonte</p>
                    <button>Favorito</button>
                    <button>Expandir</button>
                </footer>
            </figcaption>
        </figure>
    );
};

export default Imagem;
