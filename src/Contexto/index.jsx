import React from 'react';
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
    const [globos, setGlobos] = React.useState([
        { id: 1, color: 'negro', estado: false },
        { id: 2, color: 'verde', estado: false },
        { id: 3, color: 'rojo', estado: false },
        { id: 4, color: 'azul', estado: false },
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
        { id: 19, color: 'rojo', estado: false },
        { id: 20, color: 'azul', estado: false },
        { id: 21, color: 'negro', estado: false },
        { id: 5, color: 'negro', estado: false },
        { id: 6, color: 'verde', estado: false },
        { id: 7, color: 'rojo', estado: false },
        { id: 8, color: 'azul', estado: false },
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

    ])

    function PintarGlobosAleatoreos() {
        let indice1 = Math.ceil(Math.random() * 48)
        let indice2 = Math.ceil(Math.random() * 48)
        let indice3 = Math.ceil(Math.random() * 48)
        let indice4 = Math.ceil(Math.random() * 48)
        let indice5 = Math.ceil(Math.random() * 48)
        let indice9 = Math.ceil(Math.random() * 48)
        let indices = [indice1, indice2, indice3, indice4, indice5]

        let temporal = [...globos]
        temporal = temporal.map(globo => (
            globo.id == indice1 || globo.id == indice2 || globo.id == indice3 || globo.id == indice4 || globo.id == indice5
                ? { ...globo, estado: !globo.estado } : globo
        ))

        if (indices.every(indice => indice != indice9)) {
            setTimeout(() => {
                temporal = temporal.map(globo => (
                    globo.id == indice9 ? { ...globo, estado: !globo.estado } : globo
                ))
                setGlobos(temporal)
            }, 1000)
        }

        setGlobos(temporal)
        let contador = 0
        let tiempoPintar = setInterval(() => {
            let indice1 = Math.ceil(Math.random() * 48)
            let indice2 = Math.ceil(Math.random() * 48)
            let indice3 = Math.ceil(Math.random() * 48)
            let indice4 = Math.ceil(Math.random() * 48)
            let indice5 = Math.ceil(Math.random() * 48)
            let indice6 = Math.ceil(Math.random() * 48)
            let indice7 = Math.ceil(Math.random() * 48)
            let indice8 = Math.ceil(Math.random() * 48)
            let indice9 = Math.ceil(Math.random() * 48)
            let indices = [indice1, indice2, indice3, indice4, indice5, indice6, indice7, indice8]

            let temporal = [...globos]
            temporal = temporal.map(globo => ({ ...globo, estado: false }))
            contador += 4


            temporal = temporal.map(globo => (
                globo.id == indice1 || globo.id == indice2 || globo.id == indice3 || globo.id == indice4 || globo.id ==
                    indice5 || globo.id == indice6 || globo.id == indice7 || globo.id == indice8 ? { ...globo, estado: !globo.estado } : globo
            ))

            if (indices.every(indice => indice != indice9)) {
                setTimeout(() => {
                    temporal = temporal.map(globo => (
                        globo.id == indice9 || globo.id == indice1 ? { ...globo, estado: !globo.estado } : globo
                    ))
                    setGlobos(temporal)
                }, 1000)
            }

            setGlobos(temporal)
            if (contador == 30) {
                clearInterval(tiempoPintar)
            }
        }, 4000)
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

    function actualizarEstadoFinal() {
        let estadoTemporal = estadoFinal
        setsegundos(30)
        setEstadoFinal(!estadoTemporal)
        let globosTemporales = [...globos]
        globosTemporal = globosTemporales.map(globo => ({ ...globo, estado: false }))
        setGlobos(globosTemporal)
    }

    function actualizarValores(event) {
        let nombre = event.target.value
        if (nombre.trim() != '') {
            setNombre(nombre)
        } else {
            setNombre('')
        }
    }

    function AccionesFormulario(event) {
        event.preventDefault()
        let estadoTemporal = estadoPantallaInicio
        setEstadoPantallaInicio(!estadoTemporal)
        PintarGlobosAleatoreos()
    }

    function UnClick(event) {
        let indice = Math.ceil(Math.random() * 47)
        let globosTemporal = [...globos]
        globosTemporal = globosTemporal.map(globo => globo.id == event.target.id || (globo.id == indice && globo.estado != true) ? { ...globo, estado: !globo.estado } : globo)
        setGlobos(globosTemporal)
    }

    function reiniciarContadores() {
        setContadorPuntos(0)
        setPositivos(0)
        setNegativos(0)
    }

    function actualizarEstadoReiniciar() {
        let estadoTemporal = estadoPantallaInicio
        setEstadoPantallaInicio(!estadoTemporal)
    }

    function actualizarSegundos(value) {
        setsegundos(value)
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
