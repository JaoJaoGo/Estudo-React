import AnotherComponent from "./AnotherComponent";

function FirstComponent() {
    const name = "João Víctor Guedes Carrijo"

    return (
        <div className="firstcomponent">
            {/* Comentário no JSX */}
            <p>Primeiro Componente</p>
            {2 + 2}
            <p>Nome: {name}</p>
            <AnotherComponent />
        </div>
    );
}

export default FirstComponent;