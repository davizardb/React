import ReactDOM from 'react-dom'
import React from 'react'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import {CompA, CompB as B } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membru'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        < Hook />
        {/* <Contador numeroInicial={100}/> */}
        {/* <ComponenteClasse  valor="Sou um comp de classe!"/> */}
        {/* <Pai/> */}
        {/* <ComponenteComFuncao/> */}
        {/* <Familia sobrenome="Pereira">
        <Membro nome="Rocha" />
        <Membro nome="Tizil"/>
        </Familia> */}
        {/* <Familia>
        <Membro nome="Marx" sobrenome="Viana"/>
        <Membro nome="BIAG" sobrenome="Saco"/>
        </Familia> */}
        {/* <FamiliaSilva /> */}
        {/* <MultiElementos /> */}
        {/* <CompA valor="pit"/>
        <B valor ="JS fdp"/> */}

    </div>
     , elemento)