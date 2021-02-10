import React, { useContext } from 'react'
import { CampoDatosContext } from '../components/DatosContex'

function CalculatorContainer({children}) {

    const {theme} = useContext(CampoDatosContext)
    return (
       <div className={`grid-container ${theme}`} id="calculadora">
           {children}
       </div>
    )
}

export default CalculatorContainer
