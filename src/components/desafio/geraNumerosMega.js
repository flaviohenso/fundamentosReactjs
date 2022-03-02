const numeroMax = 61
const numeroMin = 1

export default props => {
    const numerosGerados = Array.of()
    let numeroAleatorio = gerarAleatorio()
    for (let index = 0; (index < props.quantidade); index++) {
        while (numerosGerados.includes(numeroAleatorio)) {
            numeroAleatorio = gerarAleatorio()
        }
        numerosGerados.push(numeroAleatorio)
        numeroAleatorio = gerarAleatorio()
    }
    return props.cb({numeros: ordenaNumeros(numerosGerados)})
}

function ordenaNumeros(numeros){
    return numeros.sort( (n1,n2) => n1 - n2)
}

function gerarAleatorio(){
    return Math.floor(Math.random() * (numeroMax - numeroMin) + numeroMin)
}


