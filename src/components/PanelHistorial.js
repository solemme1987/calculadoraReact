import React, { useContext } from 'react'
import { CampoDatosContext } from './DatosContex'

function PanelHistorial() {
 
    const {theme, historial,scroll, mostrar}= useContext( CampoDatosContext );
    return (
        <div  className={`panel_historial ${theme}  ${mostrar} 1`} id='panel_historial'>
            <ul id={`lista_historial 2 ${historial}`}>
                <div className="historialVacio">
                    <p><i className="fas fa-box-open"></i></p>
                    <p className="vacioText">No Hay Historial</p>
                </div>
            </ul>

            <div className={`box_btn_borrar_historial ${scroll}`} id="box_borrar_historial">
                <button className="btn_borrar_historial" id="eliminarHistorial">Eliminar historial</button>
            </div>
        </div>
    )

}

export default PanelHistorial
