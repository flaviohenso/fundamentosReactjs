import './index.css'
import ReactDOM from 'react-dom'
import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/comParametro'


ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro nome="Flavio Henrique" disciplina="Bando de dados" nota={9.9}/>
        <ComParametro nome="Clara Sophie" disciplina="Bando de dados" nota={9.9}/>
    </div>,
    document.getElementById('root')
    )