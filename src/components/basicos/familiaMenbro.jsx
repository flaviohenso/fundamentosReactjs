export default props => {
    const {nome, sobrenome} = props

    return <h1>{nome} <strong>{sobrenome}</strong></h1>   
}