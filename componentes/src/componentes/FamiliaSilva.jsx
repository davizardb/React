import React from 'react'
import Membro from './Membru'


export default props =>
<div>
    <Membro nome="Rocha" sobrenome={props.sobrenome} />
    <Membro nome="Pit" sobrenome={props.sobrenome} />
    <Membro nome="Tizil" sobrenome={props.sobrenome} />
  
</div>