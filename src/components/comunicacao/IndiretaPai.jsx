import IndiretaFilho from "./IndiretaFilho"

export default props => {

    let nome = '?'
    let idade = 0
    let sexo = 0

function informacoes(nomeParam, idadeParam, sexoParam){
    console.log(nomeParam, idadeParam, sexoParam)
    nome = nomeParam
    idade = idadeParam
    sexo = sexoParam
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