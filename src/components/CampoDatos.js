import React,{useContext, useState} from 'react'
import { CampoDatosContext } from './DatosContex';

const CampoDatos = ({setCampoValor}) => {


// El useContex tieen un objeto con 2 propiedades, en este caso tomo la primera
// Que es campoValor, la segunda es el resultado.
   const {campoValor} = useContext(CampoDatosContext);
  
   const [inputValue, setInputValue] = useState('')

   const  handleSubmit=(e)=>{

         e.preventDefault();

         setCampoValor(inputValue)
         
         console.log(inputValue)

   }

   const handleValue=(e)=>{
       
       console.log(e.target.value);
       setInputValue(e.target.value)
   }

    return (
        
        <div className="grid-item grid-header">
          <form onSubmit={handleSubmit}>
            <input  
               type="text" 
               placeholder="0" 
               value={campoValor}
               className="datos" 
               id="datos" 
               autoFocus 
               maxLength=""
               onChange={
                   handleValue
               } 
               
            />
            </form>
        </div>
    )
}
export default CampoDatos;