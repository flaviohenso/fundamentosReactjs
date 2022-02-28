import './input.css'

import { useState } from "react"

export default props => {
    const [valor, setValor] = useState('Valor inicial')

    const controllerNome = e => {
        console.log(e)
        setValor(e.target.value)
    }

    return <div className="entrada">
        <h2>{valor}</h2>
        <div className='input'>
            <input name="nome" value={valor} onChange={controllerNome} />
            <input name="nomeReadOnly" value={valor} readOnly />
            <input name="nomeNaoControlado" value={undefined} />
        </div>
    </div>
}