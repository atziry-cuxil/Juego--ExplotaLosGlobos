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
        {estadoPantallaInicio ? <PantallaInicio /> : estadoFinal== false ? <PantallaDelJuego/> : <PantallaFinal/>}
    </>
  )
}

export default App
