import React from 'react'

export function filhosComProps(props){
    React.Children.map(props.children, child=>{
        return React.cloneElement(child, {...props})
    })
}