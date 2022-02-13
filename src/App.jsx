import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/comParametro'
import Fragmento from './components/basicos/Fragmento'
import DesafioNumAleatorio from './components/basicos/DesafioNumAleatorio'

export default _ =>
    <>
        <Primeiro></Primeiro>
        <ComParametro nome="Flavio Henrique" disciplina="Bando de dados" nota={9.9} />
        <ComParametro nome="Clara Sophie" disciplina="Bando de dados" nota={9.9} />
        <Fragmento />
        <DesafioNumAleatorio min={1} max={10}/>
    </>

