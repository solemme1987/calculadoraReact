import React, { useContext } from 'react'
import { CampoDatosContext } from './DatosContex'


function Resultado() {

    
const {resultado} = useContext(CampoDatosContext)

    return (
        <div className="grid-item grid-header-resultado">
            <span className="resultado" id="resultado">{resultado}</span>
        </div>
    )
}

export default Resultado
