export default (props) => {

    return (<>
        <h1>Valor aleatorio</h1>
        <h2>Valor maximo: {props.max}</h2>
        <h2>Valor minimo: {props.min}</h2>
        <h2>{Math.floor(Math.random() * (props.max - props.min) + props.min)}</h2>
    </>
    )

}