import React, { useContext } from 'react'
import { CampoDatosContext } from './DatosContex'

function IconsPanel({estadosGlobales}) {

    let {campoValor,historial} = useContext(CampoDatosContext);
    const {setCampoValor, setHistorial, setScroll, setMostrar}=estadosGlobales;
    const retroceso=()=>{
         
        let tamano = campoValor.length;
        let borrado = campoValor.slice(0, tamano - 1);
        setCampoValor((nuevo)=>nuevo=borrado);
    }
    
    // MOSTRANDO EL HISTORIAL DE OPERACIONES
    const mostrarHistorial= ()=>{
                  
           if(historial===''){
                setHistorial('verHistorial')
                setScroll('scroll')
                setMostrar('mostrar') 
           }else{
                setHistorial('') 
                setScroll('') 
                setMostrar('') 
           }  
    }




    return (
        <div className="grid-item grid-header-footer">
             <span className="header-icon">
                    <i className="fas fa-clock btn_historial " id="btn_historial" onClick={mostrarHistorial}></i>
                    <i className="fas fa-square-root-alt"></i>
                    <i className="fas fa-ruler-horizontal"></i>
                </span>
                <span id="borrar" 
                      className="borrar" 
                      onClick={ retroceso }
                >
                     <i className="fas fa-backspace"></i>
                </span>
        </div>
    )
}

export default IconsPanel
