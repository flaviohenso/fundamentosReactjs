export default props => {

    return <div>
            <div>
                Filho
            </div>
            <div>
                <button onClick={
                    _ => {
                    props.callback("Joao", 62, "F")
                    }
                }>
                    fornecer informações
                </button>
            </div>
        </div>
}