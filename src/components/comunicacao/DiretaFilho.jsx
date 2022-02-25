export default props => {
    const {nome, idade, sexo} = props

    return (<div>
        <strong>nome: {nome}</strong><br/>
        <strong>Idade: {idade}</strong><br/>
        <strong>Sexo: {sexo}</strong>
    </div>)
}
