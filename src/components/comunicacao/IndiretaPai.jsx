import { useState } from "react"
import IndiretaFilho from "./IndiretaFilho"

export default props => {

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [sexo, setSexo] = useState('M')

function informacoes(nomeParam, idadeParam, sexoParam){
    console.log(nomeParam, idadeParam, sexoParam)
    setNome(nomeParam)
    setIdade(idadeParam)
    setSexo(sexoParam)
}

    return <div>
        <div>
        Dados do Pai:<br/>
        <span>nome: <strong>{nome}</strong></span><br/>
        <span>idade: <strong>{idade}</strong></span><br/>
        <span>sexo: <strong>{sexo}</strong></span>
        </div>
        <IndiretaFilho callback={informacoes}/>
    </div>
}