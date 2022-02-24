export default props => {
    const {numero} = props
    return <div>
        {numero % 2 === 0 ? <p>Par</p> : <p>Impar</p>}
    </div>
}