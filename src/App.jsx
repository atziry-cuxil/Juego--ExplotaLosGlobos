import React from 'react';
import { useState } from 'react'
import { PantallaInicio } from './PantallaInicio';
import { ContextoInicio } from './Contexto';
import { PantallaDelJuego } from './PantallaDelJuego';

function App() {
  const { estadoPantallaInicio } = React.useContext(ContextoInicio)
  return (
    <>
        {estadoPantallaInicio && <PantallaInicio />}
        {!estadoPantallaInicio && <PantallaDelJuego />}
        {/* //en esta parte uso un estado , despues del tiempo , estadoJuego: false, estadoFinal: true */}
    </>
  )
}

export default App
