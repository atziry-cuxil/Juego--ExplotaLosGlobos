import React, { Children } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

const ContextoInicio = React.createContext()

function ContextoPantallaInicio({ children }) {
    const [nombreUsuario, setNombre] = React.useState('')
    const [estadoPantallaInicio, setEstadoPantallaInicio] = React.useState(true)
    const [estadoFinal, setEstadoFinal] = React.useState(false)
    const [segundos, setsegundos] = React.useState(30)
    const [contadorPuntos, setContadorPuntos] = React.useState(0)
    const [contadorPositivos, setPositivos] = React.useState(0)
    const [contadorNegativos, setNegativos] = React.useState(0)

    function actualizarPuntaje(event) {
        let operacion = contadorPuntos
        let positivos = contadorPositivos
        let negativos = contadorNegativos

        if (event.target.dataset.id == 'verde') {
            operacion = operacion + 2
            positivos++
        } else if (event.target.dataset.id == 'rojo') {
            operacion = operacion + 1
            negativos++
        } else if (event.target.dataset.id == 'azul') {
            operacion = operacion + 5
            positivos++
        } else if (event.target.dataset.id == 'negro') {
            operacion = operacion - 3
            negativos++
        }
        setContadorPuntos(operacion)
        setNegativos(negativos)
        setPositivos(positivos)
        console.log(positivos + "positivos")
        console.log(negativos + "negativos")
        //console.log(event.target.dataset.id)
        //console.log(event.target)

        // setTimeout(( ) => {
        //     console.log('hola desde click en el globo')
        // },1000)
    }

    function AccionesFormulario(event) {
        event.preventDefault()
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
            contadorPositivos, 
            contadorNegativos,
            nombreUsuario,
            estadoPantallaInicio,
            segundos,
            estadoFinal,
            contadorPuntos,
            actualizarPuntaje,
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
