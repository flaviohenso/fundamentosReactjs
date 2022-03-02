import './resultadoMega.css'

import { useState } from 'react'
import DisplayMega from './DisplayMega'
import InputQuantidade from './InputQuantidade'
import ActionMega from './ActionMega'
import DisplayResultado from './DisplayResultado'

export default props => {

    const gerarNumeros = quantidade => {
        const numerosGerados = Array()
        let numeroAleatorio = gerarAleatorio()
        for (let index = 0; (index < quantidade); index++) {
            while (numerosGerados.includes(numeroAleatorio)) {
                numeroAleatorio = gerarAleatorio()
            }
            numerosGerados.push(numeroAleatorio)
            numeroAleatorio = gerarAleatorio()
        }
        console.log(ordenaNumeros(numerosGerados))
        return ordenaNumeros(numerosGerados)
    }

    const numeroMax = 61
    const numeroMin = 1
        
    const exibir = _ => {
        setNumerosMega(gerarNumeros(submitQuantidade))
    }

    function ordenaNumeros(numerosRecebido){
        return numerosRecebido.sort( (n1,n2) => n1 - n2)
    }
    
    function gerarAleatorio(){
        return Math.floor(Math.random() * (numeroMax - numeroMin) + numeroMin)
    }

    const [numerosIniciais, setValorNumerosIniciais] = useState(props.quantidadeNumeros)
    const [submitQuantidade, setValorQuantidade] = useState(props.quantidadeNumeros)
    const [numerosMega, setNumerosMega] = useState(Array())
   
    const submitEntrada = e => {
        setValorQuantidade(+e.target.value)
        setValorNumerosIniciais(+e.target.value)
    }    
    
    

    return (<div>
            <DisplayMega quantidade={numerosIniciais} />
            <InputQuantidade valor={submitQuantidade} cbb={submitEntrada}/>
            <ActionMega submit={exibir} /> 
            <h1>Numeros Gerados: </h1>
            <DisplayResultado numeros={numerosMega}/>         
    </div>)

}