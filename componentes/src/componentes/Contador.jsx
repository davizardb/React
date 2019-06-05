import React, { Component } from 'react'

    export default class Contador extends Component {

        state = {
            numero: this.props.numeroInicial
        }

        maisUM = () =>{
            this.alterarNumero(+1)
            // this.setState({ numero: this.state.numero +1 })
            // this.state.numero = this.state.numero +1
        }
        menasUM = () =>{
            this.alterarNumero(-1)
            // this.setState({ numero: this.state.numero -1 })
            
        }
        alterarNumero = (diferenca) => {
            this.setState({
                numero:  this.state.numero + diferenca
            })
        }

        render(){
        return (
            <div>
                <div>Numero : {this.state.numero}</div>
                <button onClick={this.maisUM}>INC</button>
                <button onClick={this.menasUM}>DEC</button>
                <button onClick={() => this.alterarNumero(10)}>
                    INC10</button>
                <button onClick={() => this.alterarNumero(-10)}>
                    DEC10</button>
            </div>    
        )
        }
    }
    {/* // 01
    // constructor(props){
    //         super(props)
    //         this.maisUM = this.maisUM.bind(this)
    // }

    // 02
    // <button onClick={() => this.maisUM()}>INC</button>

    // 03
    // maisum = () => {
    //     this.props.numero++
    // } */}