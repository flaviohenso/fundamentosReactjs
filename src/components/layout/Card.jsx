export default props => {

    const { titulo, conteudo, color } = props

    const cardStyle = {
        backgroundColor: color,
        borderColor: color,
    }

    return (<div className="card" style={cardStyle}>
        <div className="titulo">{titulo}</div>
        <div className="conteudo">Conteudo: {conteudo} <br/>{props.children}</div>
    </div>)
}