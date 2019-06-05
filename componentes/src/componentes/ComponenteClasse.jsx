import React, { Component } from 'react'
// React.Component
export default class ComponenteClasse extends Component {
    render(){
        return (
            <h1>{this.props.valor || 'Padrao'}</h1>
        )
    }
}