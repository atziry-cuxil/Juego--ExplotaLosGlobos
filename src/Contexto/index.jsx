import React, { Children } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

const ContextoInicio = React.createContext()

function ContextoPantallaInicio({ children }) {
    const [nombreUsuario, setNombre] = React.useState('')
    // const [edadUsuario, setEdad] = React.useState("")
    const [estadoPantallaInicio, setEstadoPantallaInicio] = React.useState(true)
    const [estadoReiniciar, setEstadoReiniciar] = React.useState(true)
    const [estadoFinal, setEstadoFinal] = React.useState(false)
    const [segundos, setsegundos] = React.useState(0)


    function actualizarEstadoFinal(){
        let estadoTemporal = estadoFinal
        setEstadoFinal(!estadoTemporal)
    }
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

    function actualizarEstadoReiniciar(){
        let estadoTemporal = estadoReiniciar
        setEstadoReiniciar(!estadoTemporal)
    }

    function actualizarSegundos(value) {
        setsegundos(value)
    }
    return (
        <ContextoInicio.Provider value={{
            nombreUsuario,
            estadoPantallaInicio,
            estadoReiniciar,
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
