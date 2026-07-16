import React, { Children } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

const ContextoInicio = React.createContext()

function ContextoPantallaInicio({children}) {
    const [estadoPantallaInicio, setEstadoPantallaInicio] = React.useState(true)
    const [nombreUsuario, setNombre] = React.useState('')
    // const [edadUsuario, setEdad] = React.useState("")

    function AccionesFormulario(event) {
        event.preventDefault()
        console.log(estadoPantallaInicio)
        console.log('Funcion de boton de inicio')
        setEstadoPantallaInicio(false)
    }

    function actualizarValores(event) {
        // if (Number.isNaN(parseInt(event.target.value))) {
        //     setNombre(event.target.value)
        // } else {
        //     setEdad(event.target.value)
        // }
        setNombre(event.target.value)
    }
    return (
        <ContextoInicio.Provider value={{
            nombreUsuario,
            estadoPantallaInicio,
            // edadUsuario,
            AccionesFormulario,
            actualizarValores,
        }}>
            {children}
        </ContextoInicio.Provider>
    )
}

export { ContextoPantallaInicio, ContextoInicio }
