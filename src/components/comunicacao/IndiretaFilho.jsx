export default props => {

    return <div>
            <div>
                Filho
            </div>
            <div>
                <button onClick={
                    _ => {
                    props.callback("Joao", 62, "M")
                    }
                }>
                    fornecer informações
                </button>
            </div>
        </div>
}