
export default function comParamento(props){
    const status = props.nota >= 7 ? "Aprovado" : "Reprovado"
    return (
        <div>
            <strong>{props.nome}</strong>
            <p>{props.disciplina}</p>
            <p>{status}</p>
        </div>
    )
}