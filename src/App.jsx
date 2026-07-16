import React from 'react';
import { useState } from 'react'
import { PantallaInicio } from './PantallaInicio';
import { ContextoPantallaInicio} from './ContextoPantallaInicio';
import { EstructuraPantallaInicio } from './PantallaInicio/EstructuraPantallaInicio';
import { ContextoInicio } from './ContextoPantallaInicio';
import { PantallaDelJuego } from './PantallaDelJuego';

function App() {
  //const {estadoPantallaInicio} = React.useContext(ContextoInicio)
  return (
    <>
      <ContextoPantallaInicio>
        <EstructuraPantallaInicio />
      </ContextoPantallaInicio>
      {/* <ContextoPantallaInicio>
        {estadoPantallaInicio && <PantallaInicio >
          <EstructuraPantallaInicio />
        </PantallaInicio >}
      </ContextoPantallaInicio>  */}
      {/* <PantallaDelJuego/> */}
    </>
  )
}

export default App
