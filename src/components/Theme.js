import React, { useContext } from 'react'
import { CampoDatosContext } from './DatosContex'

function Theme({setTheme}) {
   
  const {theme} = useContext(CampoDatosContext)

  const changeTheme=()=>{
      if(theme === 'ligth'){

        setTheme(theme=>theme='dark')
      }else{
        setTheme(theme=>theme='ligth')
      }
  }
    return (
        <div className="modo">
            <i className="fas fa-sun"></i>
            <div className={`switchs ${theme}`}>
                <input type="checkbox"id="darkmode" />
                <label htmlFor="darkmode" onClick={changeTheme}></label>
            </div>
            <i className="fas fa-moon"></i>
        </div>
    )
}

export default Theme;
