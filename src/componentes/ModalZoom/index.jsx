const ModalZoom = ({ foto }) => {
    return (
        <>
            <dialog open={!!foto}>
                <p>Greetings, one and all!</p>
                <form method="dialog">
                    <button>Ok</button>
                </form>
            </dialog>
        </>
    );
};

export default ModalZoom;
