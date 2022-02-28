import './contador.css'

import { Component } from "react";
import Display from './Display';
import Actions from './Actions';
import InputPasso from './InputPasso';

class Contador extends Component {

    state = {
        contador: this.props.numeroInicial || 0,
        passo: this.props.passo || 1,
    }

    inc = () => {
        this.setState({
            contador: this.state.contador + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            contador: this.state.contador - this.state.passo
        })
    }

    init = e => {
        this.setState({
            passo: +e.target.value
        })
    }

    render() {
        return <div>
            <Display contador={this.state.contador}/>
            <InputPasso valuePasso={this.state.passo} onInit={this.init} />
            <Actions onInc={this.inc} onDec={this.dec}/>
        </div>
    }

}

export default Contador
