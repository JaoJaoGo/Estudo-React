const RenderCond = ({ x, y }) => {
    return (
        <div className="condicional">
            {x > 5 && <p>X é maior que 5</p>}
            {x > 10 ? <p>X é maior que 10</p> : <p>X é menor ou igual a 10</p>}
            <p>O valor de y é: {y}</p>
        </div>
    )
}

export default RenderCond;