import produtos from '../../data/produtos'
import './tabelaProduto.css'

export default props => {
    
    return <div>
        <table className='tabelaProduto'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>CATEGORIA</th>
                    <th>PREÇO</th>
                </tr>
            </thead>
            <tbody>
            {produtos.map(produto => {
                return <tr key={produto.id}>
                    <th>{produto.id}</th>
                    <th>{produto.nome}</th>
                    <th>{produto.categoria}</th>
                    <th>R$ {produto.preco.toFixed(2)}</th>
                </tr>
                })}
            </tbody>
        </table>
    </div>
}