import React from 'react'
import {filhosComProps} from '../utils/utils'

export default props =>
<div>
    <h1><strong>Familia</strong></h1> 
   
    {filhosComProps(props)} 
    {/* {React.Children.map(props.children, child=>{
        return React.cloneElement(child, {...props})
    })
    } */}
    {/* {React.cloneElement(props.children,  */}
        {/* {...props})} */}
    {/* {React.cloneElement(props.children, 
        props)}     */}
    {/* {React.cloneElement(props.children, 
        {sobrenome: props.sobrenome})} */}
    {/* {props.children} */}
</div>