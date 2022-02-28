import './contador.css'

import { Component } from "react";

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
            <h1>Contador = </h1> <strong>{this.state.contador}</strong>
            <div>
                <input type={'number'} value={this.state.passo} onChange={this.init}/>
            </div>
            <div className="buttons">
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        </div>
    }

}

export default Contador
