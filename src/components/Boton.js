import React, { useContext, useRef } from 'react'
import { CampoDatosContext } from './DatosContex';

function Boton({butonClass, value, estadosGlobales}) {
   
    const {campoValor,theme} = useContext(CampoDatosContext)
    const {setCampoValor, setResultado}=estadosGlobales;
    const refBoton = useRef();

    const handleBoton = ()=>{
                
        //Agrego los numeros y operaciones a la pantalla
        if (refBoton.current.innerHTML !== '=' && refBoton.current.innerHTML !== 'c'){
           setCampoValor((dato)=>dato+=refBoton.current.innerHTML)
        }
         
        // Limpia el campo de  datos
        if(refBoton.current.innerHTML === 'c'){
            setCampoValor((dato)=>dato='');
            setResultado(resul=>resul=0);
        }

        if(refBoton.current.innerHTML === '='){
            setResultado(resul=>resul+1)
            calcular();
        }


    }

    // REALIZA LA OPERACION MATEMATICA
    function calcular(){

         let operacion = campoValor.replace(/x/g, '*'); 
         
         operacion = operacion.replace(/÷/g, '/');
         
        //  modifico los datos del contexto global
         setResultado((resul)=>resul=eval(operacion))
         setCampoValor((resul)=>resul=eval(operacion));
          
    }



    return (

        <div className="grid-item">
            <button className={`${butonClass} ${theme}`} 
                    ref={refBoton} 
                    onClick={handleBoton}>
               {value}
            </button> 
        </div>
            
    )
}

export default Boton
