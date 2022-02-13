import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/comParametro'
import Fragmento from './components/basicos/Fragmento'

export default _ =>
    <>
        <Primeiro></Primeiro>
        <ComParametro nome="Flavio Henrique" disciplina="Bando de dados" nota={9.9} />
        <ComParametro nome="Clara Sophie" disciplina="Bando de dados" nota={9.9} />
        <Fragmento />
    </>

