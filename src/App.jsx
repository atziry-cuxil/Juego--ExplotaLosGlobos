import React from 'react';
import { useState } from 'react'
import { ContextoInicio } from './Contexto';
import { PantallaInicio } from './PantallaInicio';
import { PantallaDelJuego } from './PantallaDelJuego';
import { PantallaFinal } from './PantallaFinal';

function App() {
  const { estadoPantallaInicio , estadoFinal,estadoReiniciar} = React.useContext(ContextoInicio)
  return (
    <>
        {estadoPantallaInicio ? <PantallaInicio /> : estadoFinal== false ? <PantallaDelJuego/> : <PantallaFinal/>}
        {/* {!estadoPantallaInicio &&  <PantallaFinal /> : <PantallaDelJuego/>} */}
        {/* //en esta parte uso un estado , despues del tiempo , estadoJuego: false, estadoFinal: true */}
        {/* {estadoFinal && <PantallaFinal/>} */}
    </>
  )
}

export default App
