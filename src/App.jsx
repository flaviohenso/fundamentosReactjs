import './App.css'
import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/comParametro'
import Fragmento from './components/basicos/Fragmento'
import DesafioNumAleatorio from './components/basicos/DesafioNumAleatorio'
import Card from './components/layout/Card'

export default _ =>
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='cards'>
            <Card titulo="Primeiro Componente" conteudo="Conteudo do card">
                <Primeiro></Primeiro>
            </Card>
            <Card titulo="Componente com parametro" conteudo="Conteudo do card">
                <ComParametro nome="Flavio Henrique" disciplina="Bando de dados" nota={9.9} />
                <ComParametro nome="Clara Sophie" disciplina="Bando de dados" nota={9.9} />
            </Card>
            <Card titulo="Fragemento" conteudo="Conteudo do card">
                <Fragmento />
            </Card>
            <Card titulo="Desafil aleatorio" conteudo="Conteudo do card">
                <DesafioNumAleatorio min={1} max={10} />
            </Card>
            <Card titulo="Card1" conteudo="Conteudo do card" />
        </div>
    </div>
