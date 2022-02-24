import IF from "./IF"

export default props => {

    const usuario = props.usuario || {}

    return (<div>
        <IF test={usuario && usuario.nome}>
            Seja bem vindo usuario {usuario.nome}
        </IF>
        <IF test={!usuario || !usuario.nome}>
            Seja bem vindo Amigão!
        </IF>
    </div>)
}