import React from 'react';
//import React, { Children } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { flushSync } from 'react-dom';

const ContextoInicio = React.createContext()

function ContextoPantallaInicio({ children }) {
    const [nombreUsuario, setNombre] = React.useState('')
    const [estadoPantallaInicio, setEstadoPantallaInicio] = React.useState(true)
    const [estadoFinal, setEstadoFinal] = React.useState(false)
    const [segundos, setsegundos] = React.useState(30)
    const [contadorPuntos, setContadorPuntos] = React.useState(0)
    const [contadorPositivos, setPositivos] = React.useState(0)
    const [contadorNegativos, setNegativos] = React.useState(0)
    const [globos, setGlobos] = React.useState([
        { id: 1, color: 'negro', estado: false },
        { id: 2, color: 'verde', estado: false },
        { id: 3, color: 'rojo', estado: false },
        { id: 4, color: 'azul', estado: false },
        { id: 5, color: 'negro', estado: false },
        { id: 6, color: 'verde', estado: false },
        { id: 7, color: 'rojo', estado: false },
        { id: 8, color: 'azul', estado: false },
        { id: 9, color: 'negro', estado: false },
        { id: 10, color: 'verde', estado: false },
        { id: 11, color: 'rojo', estado: false },
        { id: 12, color: 'azul', estado: false },
        { id: 13, color: 'negro', estado: false },
        { id: 14, color: 'verde', estado: false },
        { id: 15, color: 'rojo', estado: false },
        { id: 16, color: 'azul', estado: false },
        { id: 17, color: 'negro', estado: false },
        { id: 18, color: 'verde', estado: false },
        { id: 19, color: 'rojo', estado: false },
        { id: 20, color: 'azul', estado: false },
        { id: 21, color: 'negro', estado: false },
        { id: 22, color: 'verde', estado: false },
        { id: 23, color: 'rojo', estado: false },
        { id: 24, color: 'azul', estado: false },
        { id: 25, color: 'negro', estado: false },
        { id: 26, color: 'verde', estado: false },
        { id: 27, color: 'rojo', estado: false },
        { id: 28, color: 'azul', estado: false },
        { id: 29, color: 'negro', estado: false },
        { id: 30, color: 'verde', estado: false },
        { id: 31, color: 'rojo', estado: false },
        { id: 32, color: 'azul', estado: false },
        { id: 33, color: 'negro', estado: false },
        { id: 34, color: 'verde', estado: false },
        { id: 35, color: 'rojo', estado: false },
        { id: 36, color: 'azul', estado: false },
        { id: 37, color: 'negro', estado: false },
        { id: 38, color: 'verde', estado: false },
        { id: 39, color: 'rojo', estado: false },
        { id: 40, color: 'azul', estado: false },
        { id: 41, color: 'negro', estado: false },
        { id: 42, color: 'verde', estado: false },
        { id: 43, color: 'rojo', estado: false },
        { id: 44, color: 'azul', estado: false },
        { id: 45, color: 'negro', estado: false },
        { id: 46, color: 'verde', estado: false },
        { id: 47, color: 'rojo', estado: false },
        { id: 48, color: 'azul', estado: false },
        { id: 49, color: 'negro', estado: false },
        { id: 50, color: 'verde', estado: false },
        { id: 51, color: 'negro', estado: false },
        { id: 52, color: 'verde', estado: false },
        { id: 53, color: 'rojo', estado: false },
        { id: 54, color: 'azul', eatado: false },
        { id: 55, color: 'negro', estado: false },
        { id: 56, color: 'verde', estado: false },
        { id: 57, color: 'rojo', estado: false },
        { id: 58, color: 'azul', estado: false },
        { id: 59, color: 'negro', estado: false },
        { id: 60, color: 'verde', estado: false },
        { id: 61, color: 'negro', estado: false },
        { id: 62, color: 'verde', estado: false },
        { id: 63, color: 'rojo', estado: false },
        { id: 64, color: 'azul', estado: false },
        { id: 65, color: 'negro', estado: false },
        { id: 66, color: 'verde', estado: false },
        { id: 67, color: 'rojo', estado: false },
        { id: 68, color: 'azul', estado: false },
        { id: 69, color: 'negro', estado: false },
        { id: 70, color: 'verde', estado: false },
        { id: 71, color: 'negro', estado: false },
        { id: 72, color: 'verde', estado: false },
        { id: 73, color: 'rojo', estado: false },
        { id: 74, color: 'azul', estado: false },
        { id: 75, color: 'negro', estado: false },
        { id: 76, color: 'verde', estado: false },
        { id: 77, color: 'rojo', estado: false },
        { id: 78, color: 'azul', estado: false },
        { id: 79, color: 'negro', estado: false },
        { id: 80, color: 'verde', estado: false },
    ])

    function PintarGlobosAleatoreos() {
        let indice1 = Math.ceil(Math.random() * 80)
        let indice2 = Math.ceil(Math.random() * 50)
        let indice3 = Math.ceil(Math.random() * 60)
        let indice4 = Math.ceil(Math.random() * 70)
        let indice5 = Math.ceil(Math.random() * 60)

        let temporal = [...globos]
        temporal = temporal.map(globo => (
            globo.id == indice1 || globo.id == indice2 || globo.id == indice3 || globo.id == indice4 || globo.id == indice5
                ? { ...globo, estado: !globo.estado } : globo
        ))

        setGlobos(temporal)
        //React.useEffect(() => {
        let contador = 0
        let tiempoPintar = setInterval(() => {
            let indice1 = Math.ceil(Math.random() * 80)
            let indice2 = Math.ceil(Math.random() * 50)
            let indice3 = Math.ceil(Math.random() * 60)
            let indice4 = Math.ceil(Math.random() * 70)
            let indice5 = Math.ceil(Math.random() * 60)

            let temporal = [...globos]
            contador += 2
            temporal = temporal.map(globo => (
                globo.id == indice1 || globo.id == indice2 || globo.id == indice3 || globo.id == indice4 || globo.id == indice5
                    ? { ...globo, estado: !globo.estado } : globo
            ))

            setGlobos(temporal)
            if (contador == 30) {
                clearInterval(tiempoPintar)
            }
        }, 2000)
        //}, [globos])
    }

    function UnClick(event) {
        let globosTemporal = [...globos]
        globosTemporal = globosTemporal.map(globo => (
            globo.id == event.target.id ? { ...globo, estado: !globo.estado } : globo
        ))

        setGlobos(globosTemporal)
    }

    function actualizarPuntaje(event) {
        let operacion = contadorPuntos
        let positivos = contadorPositivos
        let negativos = contadorNegativos

        if (event.target.dataset.id == 'verde') {
            operacion = operacion + 2
            positivos++
        } else if (event.target.dataset.id == 'rojo') {
            operacion = operacion + 1
            positivos++
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
    }

    function AccionesFormulario(event) {
        event.preventDefault()
        let estadoTemporal = estadoPantallaInicio
        setEstadoPantallaInicio(!estadoTemporal)
        PintarGlobosAleatoreos()
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

    function reiniciarContadores() {
        setContadorPuntos(0)
        setPositivos(0)
        setNegativos(0)
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
            globos,
            UnClick,
            reiniciarContadores,
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
