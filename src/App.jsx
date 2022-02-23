

import './App.css'
import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/comParametro'
import Fragmento from './components/basicos/Fragmento'
import DesafioNumAleatorio from './components/basicos/DesafioNumAleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/familia'
import FamiliaMenbro from './components/basicos/familiaMenbro'
import ListaAlunos from './components/repeticao/ListaAlunos'


export default _ =>
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='cards'>
            <Card titulo="Repeticao" color="#CCCCFF">
                <ListaAlunos/>
            </Card>
            <Card titulo="Componente com filho" color="#CCCCFF">
                <Familia sobrenome="Cabral">
                    <FamiliaMenbro nome="Flavio" />
                    <FamiliaMenbro nome="Andreia" />
                    <FamiliaMenbro nome="Clara" />
                </Familia>
            </Card>
            <Card titulo="Primeiro Componente" conteudo="Conteudo do card" color="#FA8072">
                <Primeiro></Primeiro>
            </Card>
            <Card titulo="Componente com parametro" conteudo="Conteudo do card" color="#CD5C5C">
                <ComParametro nome="Flavio Henrique" disciplina="Bando de dados" nota={9.9} />
                <ComParametro nome="Clara Sophie" disciplina="Bando de dados" nota={9.9} />
            </Card>
            <Card titulo="Fragemento" conteudo="Conteudo do card" color="#FF5733">
                <Fragmento />
            </Card>
            <Card titulo="Desafil aleatorio" conteudo="Conteudo do card" color="#FFC300">
                <DesafioNumAleatorio min={1} max={10} />
            </Card>
            <Card titulo="Card1" conteudo="Conteudo do card" color="#581845 "/>
        </div>
    </div>
