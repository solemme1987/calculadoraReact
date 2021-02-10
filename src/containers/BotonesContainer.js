import Boton from '../components/Boton';
import { infoBtn } from '../data/inFoBotones.json';


function BotonesContainer({estadosGlobales}) {

    return (
        <>
            
          {
            infoBtn.map(({butonClass,value})=>(
              <Boton 
                  key={ value }
                  butonClass={ butonClass }
                  value={ value } 
                  estadosGlobales={estadosGlobales}
                  
              />
            ))
          }
      
        </>
    )
}

export default BotonesContainer;
