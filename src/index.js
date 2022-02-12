import './index.css'
import ReactDOM from 'react-dom'
import Primeiro from './components/basicos/primeiro'

const content = <strong>Olá React!!</strong>

ReactDOM.render(
    <div>
        {   content }
        <Primeiro></Primeiro>
    </div>,
    document.getElementById('root')
    )