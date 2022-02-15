export default props => {

    const { titulo, conteudo } = props

    return (<div className="card">
        <div className="titulo" >{titulo}</div>
        <div className="conteudo">Conteudo: {conteudo} <br/>{props.children}</div>
    </div>)
}