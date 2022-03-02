export default props => {
    return <div className='resultado'>
        {props.numeros.map(numero => {
            return <div key={numero} className='numero'>
                {numero}
            </div>
        })}
    </div>
}