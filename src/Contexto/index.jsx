import React, { Children } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

const ContextoInicio = React.createContext()

function ContextoPantallaInicio({ children }) {
    const [nombreUsuario, setNombre] = React.useState('')
    const [estadoPantallaInicio, setEstadoPantallaInicio] = React.useState(true)
    const [estadoFinal, setEstadoFinal] = React.useState(false)
    const [segundos, setsegundos] = React.useState(30)

    function AccionesFormulario(event) {
        event.preventDefault()
        console.log(estadoPantallaInicio)
        console.log(nombreUsuario)
        console.log('Funcion de boton de inicio')
        let estadoTemporal = estadoPantallaInicio
        setEstadoPantallaInicio(!estadoTemporal)
    }

    function actualizarValores(event) {
        let nombre = event.target.value
        if (nombre.trim() != '') {
            setNombre(nombre)
        } else {
            setNombre('')
        }
    }

    function actualizarEstadoReiniciar() {
        let estadoTemporal = estadoPantallaInicio
        setEstadoPantallaInicio(!estadoTemporal)
    }

    function actualizarSegundos(value) {
        setsegundos(value)
    }
    function actualizarEstadoFinal() {
        let estadoTemporal = estadoFinal
        setEstadoFinal(!estadoTemporal)
    }
    return (
        <ContextoInicio.Provider value={{
            nombreUsuario,
            estadoPantallaInicio,
            segundos,
            estadoFinal,
            actualizarEstadoFinal,
            actualizarSegundos,
            actualizarEstadoReiniciar,
            AccionesFormulario,
            actualizarValores,
        }}>
            {children}
        </ContextoInicio.Provider>
    )
}

export { ContextoPantallaInicio, ContextoInicio }
