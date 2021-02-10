import React,{useState} from 'react';
import './assets/App.css';
import CampoDatos from './components/CampoDatos';
import IconsPanel from './components/IconsPanel';
import PanelError from './components/PanelError';
import PanelHistorial from './components/PanelHistorial';
import Resultado from './components/Resultado';
import Theme from './components/Theme';
import BotonesContainer from './containers/BotonesContainer';
import CalculatorContainer from './containers/CalculatorContainer';

import {CampoDatosContext } from './components/DatosContex';


function App() {

  const [campoValor, setCampoValor] = useState('');
  const [resultado, setResultado] = useState(0)
  const [theme, setTheme] = useState('ligth');

  const [historial, setHistorial] = useState('');
  const [scroll,    setScroll]    = useState('');
  const [mostrar,   setMostrar]   = useState('');

  //OBJETO DE DATOS GLOBALES   
  let datosContex={
    campoValor,
    resultado,
    theme,
    historial,
    scroll,
    mostrar
  }
  //OBJETO DE FUNCIONES PARA MOFIDIFCAR LOS DATOS GLOBALES
  let estadosGlobales={
    setCampoValor,
    setResultado,
    setTheme,
    setHistorial,
    setScroll,
    setMostrar
  }


  return (
  
    <>
      <CampoDatosContext.Provider value={datosContex} > 

          <CalculatorContainer >
            
              <CampoDatos setCampoValor={setCampoValor}/>

              <Resultado />

              <IconsPanel estadosGlobales={estadosGlobales}/>

              <PanelHistorial />

              <BotonesContainer estadosGlobales={estadosGlobales}/>

              <PanelError />
                      
          </CalculatorContainer>

          <Theme setTheme={setTheme}/>

      </CampoDatosContext.Provider>
    
     </>
  );
}

export default App;
