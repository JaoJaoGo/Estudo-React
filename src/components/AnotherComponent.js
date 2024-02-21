const AnotherComponent = () => {

    const handleClick = () => {
        console.log('Clicou no botão!')
    }

    return (
        <div className="anothercomponent">
            <p>Segundo componente</p>
            <button onClick={handleClick}>Evento de Clique</button>
            <hr />
            <button onClick={() => console.log('Teste')}>Evento no Elemento</button>
        </div>
    );
}

export default AnotherComponent;