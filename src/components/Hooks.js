import { useEffect, useState } from 'react';

const Hooks = () => {
    let idade = 21;

    const [novaIdade, setNovaIdade] = useState(21);

    const changeAge = () => {
        idade++;
        console.log(idade);
    }

    const changeNewAge = () => {
        let novoValor = novaIdade + 1;
        setNovaIdade(novoValor);
    }

    useEffect(() => {
        console.log('Testando');
    })

    return (
        <div className="idade">
            <p>Idade: {idade} anos</p>
            <button onClick={changeAge}>Aumentar a idade</button>
            <p>Idade: {novaIdade} anos</p>
            <button onClick={changeNewAge}>Aumentar a nova idade</button>
        </div>
    )
}

export default Hooks;