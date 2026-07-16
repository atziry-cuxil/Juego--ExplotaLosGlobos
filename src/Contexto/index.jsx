import React, { Children } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

const ContextoInicio = React.createContext()

function ContextoPantallaInicio({ children }) {
    const [estadoPantallaInicio, setEstadoPantallaInicio] = React.useState(true)
    const [nombreUsuario, setNombre] = React.useState('')
    // const [edadUsuario, setEdad] = React.useState("")

    function AccionesFormulario(event) {
        event.preventDefault()
        console.log(estadoPantallaInicio)
        console.log(nombreUsuario)
        console.log('Funcion de boton de inicio')
        let estadoTemporal = estadoPantallaInicio
        setEstadoPantallaInicio(!estadoTemporal)
    }

    function actualizarValores(event) {
        // if (Number.isNaN(parseInt(event.target.value))) {
        //     setNombre(event.target.value)
        // } else {
        //     setEdad(event.target.value)
        // }
        let nombre = event.target.value
        //setNombre(nombre.trim())
        if (nombre.trim() != '') {
            setNombre(nombre)
        } else {
            setNombre('')
        }
    }
    return (
        <ContextoInicio.Provider value={{
            nombreUsuario,
            estadoPantallaInicio,
            AccionesFormulario,
            actualizarValores,
        }}>
            {children}
        </ContextoInicio.Provider>
    )
}

export { ContextoPantallaInicio, ContextoInicio }
