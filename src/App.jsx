import React from 'react';
import { useState } from 'react'
import { ContextoInicio } from './Contexto';
import { PantallaInicio } from './PantallaInicio';
import { PantallaDelJuego } from './PantallaDelJuego';
import { PantallaFinal } from './PantallaFinal';

function App() {
  const { estadoPantallaInicio , estadoFinal} = React.useContext(ContextoInicio)
  return (
    <>
        {estadoPantallaInicio && <PantallaInicio />}
        {/* {!estadoPantallaInicio && <PantallaDelJuego />} */}
        {/* //en esta parte uso un estado , despues del tiempo , estadoJuego: false, estadoFinal: true */}
        {estadoFinal && <PantallaFinal/>}
    </>
  )
}

export default App
